import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createSatteriMarkdownProcessor } from "@astrojs/markdown-satteri";

const here = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(here, "../../..");
const coursesRoot = path.join(projectRoot, "design/skool/courses");
const outputPath = path.join(here, "course-data.js");
const renderer = await createSatteriMarkdownProcessor({
  syntaxHighlight: false,
  shikiConfig: {},
  remarkPlugins: [],
  rehypePlugins: [],
  gfm: true,
  smartypants: false,
});

const natural = new Intl.Collator("en", { numeric: true, sensitivity: "base" });
const sortNames = (a, b) => natural.compare(a.name ?? a, b.name ?? b);
const cleanFileTitle = (filename) => filename.replace(/\.md$/i, "").replace(/^\d+\s+-\s+/, "");
const normalizeHeading = (line) => line.replace(/^#+\s*/, "").replace(/[*_`]/g, "").trim();

function assertSkoolRichTextCompatible(markdown, renderedHtml, sourceLabel) {
  if (/<table(?:\s|>)/i.test(markdown) || /<table(?:\s|>)/i.test(renderedHtml)) {
    throw new Error(`Unsupported table in ${sourceLabel}. Convert it to headings and labeled lists for Skool rich text.`);
  }
}

const tableGuardCases = [
  "| A | B |\n| --- | --- |\n| 1 | 2 |",
  "A | B\n--- | ---\n1 | 2",
  "  A | B\n  --- | ---\n  1 | 2",
  "<table><tr><td>Raw HTML table</td></tr></table>",
];
for (const [index, markdown] of tableGuardCases.entries()) {
  const rendered = await renderer.render(markdown);
  let rejected = false;
  try {
    assertSkoolRichTextCompatible(markdown, rendered.code, `table-guard regression case ${index + 1}`);
  } catch {
    rejected = true;
  }
  if (!rejected) throw new Error(`Skool table guard regression case ${index + 1} was not rejected.`);
}

function toPlainText(markdown) {
  return markdown
    .replace(/```[^\n]*\n([\s\S]*?)```/g, "$1")
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^>\s?/gm, "")
    .replace(/^[-*+]\s+/gm, "• ")
    .replace(/^\d+\.\s+/gm, (match) => match)
    .replace(/(\*\*|__)(.*?)\1/g, "$2")
    .replace(/([*_`~])(.*?)\1/g, "$2")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function browserHref(absolutePath) {
  const relative = path.relative(projectRoot, absolutePath).split(path.sep);
  return `/${relative.map(encodeURIComponent).join("/")}`;
}

function sectionParagraph(lines, headingPattern) {
  const headingIndex = lines.findIndex((line) => /^##\s+/.test(line) && headingPattern.test(line));
  if (headingIndex < 0) return "";
  let paragraph = [];
  for (let index = headingIndex + 1; index < lines.length; index += 1) {
    const line = lines[index].trim();
    if (/^#{1,2}\s+/.test(line)) break;
    if (!line) {
      if (paragraph.length) break;
      continue;
    }
    if (/^\*\*Unicode character count/i.test(line)) continue;
    paragraph.push(line);
  }
  return paragraph.join(" ").replace(/^```\w*\s*|```$/g, "").trim();
}

function fencedValueAfter(lines, markerPattern) {
  const markerIndex = lines.findIndex((line) => markerPattern.test(line));
  if (markerIndex < 0) return "";
  const start = lines.findIndex((line, index) => index > markerIndex && line.trim().startsWith("```"));
  if (start < 0) return "";
  const end = lines.findIndex((line, index) => index > start && line.trim() === "```");
  return (end > start ? lines.slice(start + 1, end) : []).join("\n").trim();
}

function courseMeta(readme, dirname) {
  const lines = readme.split(/\r?\n/);
  let name = sectionParagraph(lines, /course name/i);
  if (!name) name = fencedValueAfter(lines, /^\*\*Course name/i);
  if (!name) {
    name = normalizeHeading(lines.find((line) => /^#\s+/.test(line)) ?? dirname)
      .replace(/^Builders Lab:\s*/i, "")
      .replace(/\s+—\s+Skool Upload Package$/i, "");
  }

  let description = sectionParagraph(lines, /course description/i);
  if (!description) description = fencedValueAfter(lines, /^\*\*Course description/i);

  return { name, description };
}

async function markdownItem(filePath, kind, context) {
  const markdown = await fs.readFile(filePath, "utf8");
  const rendered = await renderer.render(markdown);
  assertSkoolRichTextCompatible(markdown, rendered.code, path.relative(projectRoot, filePath));
  const firstHeading = markdown.split(/\r?\n/).find((line) => /^#\s+/.test(line));
  const title = firstHeading ? normalizeHeading(firstHeading) : cleanFileTitle(path.basename(filePath));
  const words = toPlainText(markdown).split(/\s+/).filter(Boolean).length;
  const relativePath = path.relative(coursesRoot, filePath).split(path.sep).join("/");
  const id = `${kind}:${relativePath}`;
  // The rebuilt Course 1 has not been independently verified in Skool yet.
  const existingLive = false;

  return {
    id,
    kind,
    title,
    filename: path.basename(filePath),
    courseId: context.courseId,
    folderId: context.folderId ?? null,
    folderName: context.folderName ?? "Course resources",
    html: rendered.code,
    plainText: toPlainText(markdown),
    words,
    minutes: Math.max(1, Math.ceil(words / 220)),
    sourceHref: browserHref(filePath),
    sourcePath: `design/skool/courses/${relativePath}`,
    existingLive,
  };
}

const directoryEntries = (directory) => fs.readdir(directory, { withFileTypes: true });
const courseEntries = (await directoryEntries(coursesRoot))
  .filter((entry) => entry.isDirectory() && /^\d{2}-/.test(entry.name))
  .sort(sortNames);

const courses = [];
for (const [courseIndex, entry] of courseEntries.entries()) {
  const coursePath = path.join(coursesRoot, entry.name);
  const readmePath = path.join(coursePath, "README.md");
  const readme = await fs.readFile(readmePath, "utf8");
  const meta = courseMeta(readme, entry.name);
  const courseId = entry.name;
  const children = await directoryEntries(coursePath);
  const folderEntries = children
    .filter((child) => child.isDirectory() && !["Course Art", "Resources", "Video Scripts"].includes(child.name))
    .sort(sortNames);

  const folders = [];
  for (const [folderIndex, folderEntry] of folderEntries.entries()) {
    const folderPath = path.join(coursePath, folderEntry.name);
    const folderId = `${courseId}/${folderEntry.name}`;
    const folderChildren = await directoryEntries(folderPath);
    const lessonFiles = folderChildren
      .filter((child) => child.isFile() && child.name.endsWith(".md"))
      .sort(sortNames);
    const nestedResourcePath = path.join(folderPath, "Resources");
    let nestedResourceFiles = [];
    try {
      nestedResourceFiles = (await directoryEntries(nestedResourcePath))
        .filter((child) => child.isFile() && child.name.endsWith(".md"))
        .sort(sortNames);
    } catch {}

    const context = { courseId, folderId, folderName: folderEntry.name };
    const lessons = await Promise.all(
      lessonFiles.map((file) => markdownItem(path.join(folderPath, file.name), "lesson", context)),
    );
    const resources = await Promise.all(
      nestedResourceFiles.map((file) => markdownItem(path.join(nestedResourcePath, file.name), "resource", context)),
    );

    folders.push({
      id: folderId,
      order: folderIndex + 1,
      name: folderEntry.name,
      existingLive: false,
      lessons,
      resources,
    });
  }

  const rootResourcePath = path.join(coursePath, "Resources");
  let rootResourceFiles = [];
  try {
    rootResourceFiles = (await directoryEntries(rootResourcePath))
      .filter((child) => child.isFile() && child.name.endsWith(".md"))
      .sort(sortNames);
  } catch {}
  const resources = await Promise.all(
    rootResourceFiles.map((file) => markdownItem(path.join(rootResourcePath, file.name), "resource", { courseId })),
  );

  courses.push({
    id: courseId,
    order: courseIndex + 1,
    name: meta.name,
    description: meta.description,
    releaseStatus: courseIndex === 0 ? "active" : "hold",
    releaseNote: courseIndex === 0
      ? "Approved replacement course; upload in Draft and verify before release."
      : "Legacy draft on hold for curriculum reconciliation. Do not upload or mark complete.",
    existingLive: false,
    readmeHref: browserHref(readmePath),
    folders,
    resources,
  });
}

const totals = courses.reduce(
  (sum, course) => {
    sum.courses += 1;
    sum.folders += course.folders.length;
    sum.lessons += course.folders.reduce((count, folder) => count + folder.lessons.length, 0);
    sum.resources += course.resources.length + course.folders.reduce((count, folder) => count + folder.resources.length, 0);
    return sum;
  },
  { courses: 0, folders: 0, lessons: 0, resources: 0 },
);
totals.steps = totals.courses + totals.folders + totals.lessons + totals.resources;

const payload = {
  generatedAt: new Date().toISOString(),
  skoolUrl: "https://www.skool.com/local-seo-engineering-7047/classroom",
  totals,
  courses,
};

await fs.writeFile(outputPath, `window.BUILDERS_LAB_COURSES = ${JSON.stringify(payload)};\n`);
console.log(`Built ${path.relative(projectRoot, outputPath)}`);
console.log(totals);
