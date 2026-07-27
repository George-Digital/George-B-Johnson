(() => {
  const { useEffect, useMemo, useRef, useState } = React;
  const h = React.createElement;
  const data = window.BUILDERS_LAB_COURSES;
  const STORAGE_KEY = "builders-lab-skool-upload-progress-v1";
  const ACTIVE_KEY = "builders-lab-skool-upload-active-v1";

  function buildCourseTasks(course) {
    const tasks = [
      {
        id: `course:${course.id}`,
        kind: "course",
        title: course.name,
        course,
        existingLive: course.existingLive,
      },
    ];
    course.folders.forEach((folder) => {
      tasks.push({
        id: `folder:${folder.id}`,
        kind: "folder",
        title: folder.name,
        course,
        folder,
        existingLive: folder.existingLive,
      });
      folder.lessons.forEach((item) => tasks.push({ ...item, course, folder }));
      folder.resources.forEach((item) => tasks.push({ ...item, course, folder }));
    });
    course.resources.forEach((item) => tasks.push({ ...item, course, folder: null }));
    return tasks;
  }

  const tasksByCourse = new Map(data.courses.map((course) => [course.id, buildCourseTasks(course)]));
  const allTasks = data.courses.flatMap((course) => tasksByCourse.get(course.id));
  const allTaskIds = new Set(allTasks.map((task) => task.id));
  const actionableTasks = allTasks.filter((task) => task.course.releaseStatus === "active");
  const actionableTaskIds = new Set(actionableTasks.map((task) => task.id));

  function readProgress() {
    try {
      return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]").filter((id) => actionableTaskIds.has(id)));
    } catch {
      return new Set();
    }
  }

  function readActive() {
    try {
      const saved = JSON.parse(localStorage.getItem(ACTIVE_KEY) || "{}");
      return {
        courseId: data.courses.some((course) => course.id === saved.courseId) ? saved.courseId : data.courses[0].id,
        taskId: allTaskIds.has(saved.taskId) ? saved.taskId : `course:${data.courses[0].id}`,
      };
    } catch {
      return { courseId: data.courses[0].id, taskId: `course:${data.courses[0].id}` };
    }
  }

  function statusChip(task, completed) {
    if (task.course.releaseStatus === "hold") return h("span", { className: "status-chip status-chip--hold" }, "On hold");
    if (completed) return h("span", { className: "status-chip status-chip--done" }, "Uploaded");
    if (task.existingLive) return h("span", { className: "status-chip status-chip--existing" }, "Exists — verify");
    return h("span", { className: "status-chip" }, "Draft queue");
  }

  function CourseRail({ activeCourseId, completed, onSelect }) {
    return h(
      "nav",
      { className: "course-rail", "aria-label": "Builders Lab courses" },
      h("div", { className: "rail-heading" }, h("span", { className: "eyebrow" }, "Release control"), h("h2", null, "Course status")),
      h(
        "ol",
        { className: "course-list" },
        data.courses.map((course) => {
          const tasks = tasksByCourse.get(course.id);
          const held = course.releaseStatus === "hold";
          const done = held ? 0 : tasks.filter((task) => completed.has(task.id)).length;
          const percent = held ? 0 : Math.round((done / tasks.length) * 100);
          return h(
            "li",
            { key: course.id },
            h(
              "button",
              {
                className: `course-button${held ? " course-button--hold" : ""}`,
                type: "button",
                "aria-current": activeCourseId === course.id ? "true" : undefined,
                onClick: () => onSelect(course),
              },
              h("span", { className: "course-number" }, String(course.order).padStart(2, "0")),
              h(
                "span",
                { className: "course-button__body" },
                h("span", { className: "course-button__title" }, course.name),
                h("span", { className: "course-button__meta" }, held ? h("span", null, "On hold · inspect only") : h(React.Fragment, null, h("span", null, `${done}/${tasks.length} steps`), h("span", null, `${percent}%`))),
              ),
              h("span", { className: "mini-progress", "aria-hidden": "true" }, h("span", { style: { width: `${percent}%` } })),
            ),
          );
        }),
      ),
      h("p", { className: "rail-note" }, "Only the active replacement course can be marked uploaded. Held legacy courses remain available for inspection."),
    );
  }

  function TaskRow({ task, activeTaskId, completed, onSelect, number, child = false }) {
    const isDone = completed.has(task.id);
    const held = task.course.releaseStatus === "hold";
    const stateClass = held ? "task-state task-state--hold" : isDone ? "task-state task-state--done" : task.existingLive ? "task-state task-state--existing" : "task-state";
    return h(
      "button",
      {
        key: task.id,
        className: `task-row${child ? " task-row--child" : ""}`,
        type: "button",
        "aria-current": activeTaskId === task.id ? "true" : undefined,
        onClick: () => onSelect(task),
      },
      h("span", { className: stateClass, "aria-label": held ? "On hold" : isDone ? "Uploaded" : task.existingLive ? "Exists in Skool; verify" : "Not uploaded" }, held ? "—" : isDone ? "✓" : ""),
      h(
        "span",
        { className: "task-row__text" },
        h("span", { className: "task-row__title" }, task.title),
        h("span", { className: "task-row__kind" }, task.kind === "course" ? "Course setup" : task.kind === "folder" ? "Folder setup" : task.kind),
      ),
      h("span", { className: "task-row__number" }, number || ""),
    );
  }

  function TaskQueue({ course, activeTaskId, completed, onSelect, filter, setFilter, query, setQuery }) {
    const matches = (task) => {
      if (filter === "remaining" && completed.has(task.id)) return false;
      const search = query.trim().toLowerCase();
      if (!search) return true;
      return [task.title, task.kind, task.folder?.name, task.course.name].filter(Boolean).join(" ").toLowerCase().includes(search);
    };
    const courseTask = tasksByCourse.get(course.id)[0];
    const visibleCount = tasksByCourse.get(course.id).filter(matches).length;
    const rows = [];

    if (matches(courseTask)) {
      rows.push(h("p", { className: "queue-section-label", key: "course-label" }, h("span", null, "Course"), h("span", null, "01 shell")));
      rows.push(h(TaskRow, { key: courseTask.id, task: courseTask, activeTaskId, completed, onSelect }));
    }

    course.folders.forEach((folder) => {
      const folderTask = tasksByCourse.get(course.id).find((task) => task.id === `folder:${folder.id}`);
      const children = [...folder.lessons, ...folder.resources].map((item) => tasksByCourse.get(course.id).find((task) => task.id === item.id));
      const visibleFolder = matches(folderTask);
      const visibleChildren = children.filter(matches);
      if (!visibleFolder && !visibleChildren.length) return;
      rows.push(
        h(
          "p",
          { className: "queue-section-label", key: `${folder.id}-label` },
          h("span", null, `Folder ${String(folder.order).padStart(2, "0")}`),
          h("span", null, `${folder.lessons.length} lessons${folder.resources.length ? ` · ${folder.resources.length} resources` : ""}`),
        ),
      );
      if (visibleFolder) rows.push(h(TaskRow, { key: folderTask.id, task: folderTask, activeTaskId, completed, onSelect, number: "F" }));
      visibleChildren.forEach((task) => {
        const match = task.filename.match(/^(\d+)/);
        rows.push(h(TaskRow, { key: task.id, task, activeTaskId, completed, onSelect, number: task.kind === "resource" ? "R" : match?.[1], child: true }));
      });
    });

    const rootResources = course.resources.map((item) => tasksByCourse.get(course.id).find((task) => task.id === item.id)).filter(matches);
    if (rootResources.length) {
      rows.push(h("p", { className: "queue-section-label", key: "resources-label" }, h("span", null, "Course resources"), h("span", null, `${rootResources.length} files`)));
      rootResources.forEach((task) => rows.push(h(TaskRow, { key: task.id, task, activeTaskId, completed, onSelect, number: "R", child: true })));
    }

    return h(
      "section",
      { className: "task-queue", "aria-label": `${course.name} upload queue` },
      h(
        "div",
        { className: "queue-tools" },
        h("label", { className: "search-wrap" }, h("span", { className: "sr-only" }, "Search this course"), h("input", { value: query, type: "search", placeholder: "Search this course", onChange: (event) => setQuery(event.target.value) })),
        h(
          "div",
          { className: "filter-row" },
          h(
            "div",
            { className: "filter-group" },
            ["all", "remaining"].map((value) => h("button", { key: value, className: "filter-button", type: "button", "aria-pressed": filter === value, onClick: () => setFilter(value) }, value === "all" ? "All" : "Remaining")),
          ),
          h("span", { className: "queue-count" }, `${visibleCount} visible`),
        ),
      ),
      h("div", { className: "queue-body" }, rows.length ? rows : h("div", { className: "empty-queue" }, h("strong", null, filter === "remaining" && !query ? "Course queue complete" : "No matching steps"), h("span", null, filter === "remaining" && !query ? "Switch to All to review uploaded items." : "Try a different title, folder, or content type."))),
    );
  }

  function ReleaseNotice({ task }) {
    if (task.course.releaseStatus === "hold") {
      return h("div", { className: "existing-notice existing-notice--hold" }, h("strong", null, "Release hold"), h("p", null, task.course.releaseNote));
    }
    if (!task.existingLive) return null;
    const noun = task.kind === "course" ? "course shell" : task.kind === "folder" ? "folder" : "page";
    return h("div", { className: "existing-notice" }, h("strong", null, "Avoid a duplicate"), h("p", null, `This ${noun} already exists in Skool as a draft. Compare or update it, then mark this step uploaded.`));
  }

  function TaskActions({ task, completed, onToggle, onCopy, copyLabel }) {
    const held = task.course.releaseStatus === "hold";
    return h(
      "div",
      { className: "action-bar" },
      onCopy ? h("button", { className: "action-button", type: "button", onClick: onCopy, disabled: held }, held ? "Copy disabled — on hold" : copyLabel) : null,
      h("button", { className: `action-button action-button--secondary${completed ? " action-button--done" : ""}`, type: "button", onClick: onToggle, disabled: held }, held ? "On hold" : completed ? "Marked uploaded" : "Mark uploaded"),
      task.sourceHref ? h("a", { className: "source-link", href: task.sourceHref, target: "_blank", rel: "noreferrer" }, "Open Markdown source ↗") : null,
    );
  }

  function TaskPreview({ task, completed, onToggle, onCopyText, onCopyRich }) {
    const held = task.course.releaseStatus === "hold";
    const kindLabel = task.kind === "course" ? "Course setup" : task.kind === "folder" ? "Folder setup" : task.kind === "resource" ? "Copyable resource" : "Lesson page";
    const meta = [kindLabel];
    if (task.words) meta.push(`${task.words.toLocaleString()} words`, `${task.minutes} min read`);

    let body;
    if (task.kind === "course") {
      body = h(
        "div",
        { className: "setup-panel" },
        h("div", { className: "setup-field" }, h("span", { className: "setup-field__label" }, "Course name"), h("p", { className: "setup-field__value" }, task.course.name), h("button", { className: "copy-small", type: "button", disabled: held, onClick: () => onCopyText(task.course.name, "Course name copied") }, held ? "Copy disabled — on hold" : "Copy name")),
        h("div", { className: "setup-field" }, h("span", { className: "setup-field__label" }, "Description"), h("p", { className: "setup-field__value" }, task.course.description), h("button", { className: "copy-small", type: "button", disabled: held, onClick: () => onCopyText(task.course.description, "Course description copied") }, held ? "Copy disabled — on hold" : "Copy description")),
        h("a", { className: "source-link", href: task.course.readmeHref, target: "_blank", rel: "noreferrer" }, "Open full course instructions ↗"),
      );
    } else if (task.kind === "folder") {
      body = h(
        React.Fragment,
        null,
        h("div", { className: "folder-summary" }, h("div", null, h("strong", null, task.folder.lessons.length), h("span", null, "Lesson pages")), h("div", null, h("strong", null, task.folder.resources.length), h("span", null, "Local resources"))),
        h("div", { className: "setup-panel" }, h("div", { className: "setup-field" }, h("span", { className: "setup-field__label" }, "Folder name"), h("p", { className: "setup-field__value" }, task.folder.name), h("button", { className: "copy-small", type: "button", disabled: held, onClick: () => onCopyText(task.folder.name, "Folder name copied") }, held ? "Copy disabled — on hold" : "Copy name"))),
      );
    } else {
      body = h("article", { className: "lesson-preview", dangerouslySetInnerHTML: { __html: task.html } });
    }

    return h(
      "div",
      { className: "preview-content" },
      h(
        "header",
        { className: "task-header" },
        h("div", { className: "task-header__meta" }, ...meta.map((value) => h("span", { key: value }, value)), statusChip(task, completed)),
        h("h1", null, task.title),
        h(ReleaseNotice, { task }),
        h(TaskActions, {
          task,
          completed,
          onToggle,
          onCopy: task.kind === "lesson" || task.kind === "resource" ? () => onCopyRich(task) : task.kind === "folder" ? () => onCopyText(task.folder.name, "Folder name copied") : null,
          copyLabel: task.kind === "resource" ? "Copy rendered resource" : task.kind === "lesson" ? "Copy rendered lesson" : "Copy folder name",
        }),
      ),
      body,
    );
  }

  function App() {
    const saved = useMemo(readActive, []);
    const [completed, setCompleted] = useState(readProgress);
    const [activeCourseId, setActiveCourseId] = useState(saved.courseId);
    const [activeTaskId, setActiveTaskId] = useState(saved.taskId);
    const [filter, setFilter] = useState("all");
    const [query, setQuery] = useState("");
    const [toast, setToast] = useState(null);
    const toastTimer = useRef(null);

    const activeCourse = data.courses.find((course) => course.id === activeCourseId) || data.courses[0];
    const activeTask = allTasks.find((task) => task.id === activeTaskId) || tasksByCourse.get(activeCourse.id)[0];
    const activeIndex = allTasks.findIndex((task) => task.id === activeTask.id);
    const doneCount = [...completed].filter((id) => actionableTaskIds.has(id)).length;
    const progress = Math.round((doneCount / actionableTasks.length) * 100);

    useEffect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed])), [completed]);
    useEffect(() => localStorage.setItem(ACTIVE_KEY, JSON.stringify({ courseId: activeCourseId, taskId: activeTaskId })), [activeCourseId, activeTaskId]);
    useEffect(() => {
      const pane = document.querySelector(".preview-pane");
      pane?.scrollTo({ top: 0, behavior: "smooth" });
    }, [activeTaskId]);
    useEffect(() => {
      const onKey = (event) => {
        if (!event.altKey || !["ArrowLeft", "ArrowRight"].includes(event.key)) return;
        event.preventDefault();
        const nextIndex = event.key === "ArrowLeft" ? activeIndex - 1 : activeIndex + 1;
        if (allTasks[nextIndex]) selectTask(allTasks[nextIndex]);
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, [activeIndex]);

    function notify(message, error = false) {
      clearTimeout(toastTimer.current);
      setToast({ message, error });
      toastTimer.current = setTimeout(() => setToast(null), 2600);
    }

    function selectTask(task) {
      setActiveCourseId(task.course.id);
      setActiveTaskId(task.id);
    }

    function selectCourse(course) {
      setActiveCourseId(course.id);
      setQuery("");
      const tasks = tasksByCourse.get(course.id);
      setActiveTaskId((tasks.find((task) => !completed.has(task.id)) || tasks[0]).id);
    }

    function toggleComplete() {
      if (activeTask.course.releaseStatus === "hold") {
        notify("This legacy course is on hold and cannot be marked uploaded.", true);
        return;
      }
      setCompleted((current) => {
        const next = new Set(current);
        if (next.has(activeTask.id)) next.delete(activeTask.id);
        else next.add(activeTask.id);
        return next;
      });
    }

    async function copyText(text, message) {
      if (activeTask.course.releaseStatus === "hold") {
        notify("Copying is disabled while this legacy course is on hold.", true);
        return;
      }
      try {
        await window.CopyKit.copyText(text);
        notify(message);
      } catch (error) {
        notify(error.message || "Could not copy to the clipboard", true);
      }
    }

    async function copyRich(task) {
      if (task.course.releaseStatus === "hold") {
        notify("Copying is disabled while this legacy course is on hold.", true);
        return;
      }
      try {
        await window.CopyKit.copyRich(task.html, task.plainText);
        notify(`${task.kind === "resource" ? "Resource" : "Lesson"} copied with rich formatting`);
      } catch (error) {
        notify(error.message || "Could not copy to the clipboard", true);
      }
    }

    function goTo(index) {
      if (allTasks[index]) selectTask(allTasks[index]);
    }

    return h(
      "main",
      { className: "app-shell" },
      h(
        "header",
        { className: "topbar" },
        h("div", { className: "brand-block" }, h("span", { className: "brand-mark" }, "BL"), h("div", { className: "brand-copy" }, h("strong", null, "Course upload desk"), h("span", null, "Local working tool · Draft only"))),
        h("div", { className: "progress-block" }, h("div", { className: "progress-block__line" }, h("span", null, "Active-course progress"), h("strong", null, `${doneCount} / ${actionableTasks.length}`)), h("div", { className: "progress-track", role: "progressbar", "aria-label": "Active course upload progress", "aria-valuemin": 0, "aria-valuemax": actionableTasks.length, "aria-valuenow": doneCount }, h("span", { style: { width: `${progress}%` } }))),
        h("a", { className: "topbar__action", href: "/design/skool/courses/README.md", target: "_blank", rel: "noreferrer" }, "Catalogue", h("span", { className: "topbar__arrow", "aria-hidden": "true" }, "↗")),
        h("a", { className: "topbar__action topbar__action--primary", href: data.skoolUrl, target: "_blank", rel: "noreferrer" }, "Open Skool", h("span", { className: "topbar__arrow", "aria-hidden": "true" }, "↗")),
      ),
      h(
        "div",
        { className: "workspace" },
        h(CourseRail, { activeCourseId, completed, onSelect: selectCourse }),
        h(TaskQueue, { course: activeCourse, activeTaskId, completed, onSelect: selectTask, filter, setFilter, query, setQuery }),
        h(
          "section",
          { className: "preview-pane", "aria-label": "Upload content preview" },
          h("div", { className: "preview-toolbar" }, h("div", { className: "preview-toolbar__context" }, h("span", null, activeTask.course.name), h("strong", null, activeTask.folder?.name || (activeTask.kind === "course" ? "Course setup" : "Course resources"))), h("div", { className: "pager" }, h("button", { className: "icon-button", type: "button", disabled: activeIndex <= 0, onClick: () => goTo(activeIndex - 1), "aria-label": "Previous upload step" }, "←"), h("span", null, `${activeIndex + 1} / ${allTasks.length}`), h("button", { className: "icon-button", type: "button", disabled: activeIndex >= allTasks.length - 1, onClick: () => goTo(activeIndex + 1), "aria-label": "Next upload step" }, "→"))),
          h(TaskPreview, { task: activeTask, completed: completed.has(activeTask.id), onToggle: toggleComplete, onCopyText: copyText, onCopyRich: copyRich }),
        ),
      ),
      toast ? h("div", { className: `toast${toast.error ? " toast--error" : ""}`, role: "status" }, toast.message) : null,
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(h(App));
})();
