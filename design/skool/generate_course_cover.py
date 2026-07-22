#!/usr/bin/env python3
"""Generate the Builders Lab Course 01 cover in the current Skool theme."""
from __future__ import annotations

from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parent
FONTS = ROOT / "course-cover-assets" / "fonts"
RAW_ART = ROOT / "runware-raw-cover.png"
OUTPUT_DIR = ROOT / "courses" / "01-ai-systems-builder-sprint" / "Course Art"
OUTPUT = OUTPUT_DIR / "ai-systems-builder-sprint-cover-1280x720.png"

WIDTH, HEIGHT = 1280, 720
NAVY = (8, 18, 35)
NAVY_DEEP = (5, 12, 25)
BLUE = (45, 137, 255)
CYAN = (70, 220, 255)
LIME = (154, 255, 93)
WHITE = (244, 248, 255)
LIGHT_BLUE = (173, 214, 255)
MUTED = (169, 186, 210)


def font(filename: str, size: int, variation: str | None = None) -> ImageFont.FreeTypeFont:
    face = ImageFont.truetype(FONTS / filename, size)
    if variation and hasattr(face, "set_variation_by_name"):
        face.set_variation_by_name(variation)
    return face


def add_left_readability_gradient(image: Image.Image) -> Image.Image:
    overlay = Image.new("RGBA", image.size, (0, 0, 0, 0))
    pixels = overlay.load()
    for x in range(WIDTH):
        if x <= 410:
            alpha = 88
        elif x >= 790:
            alpha = 0
        else:
            alpha = round(88 * (1 - (x - 410) / 380))
        for y in range(HEIGHT):
            pixels[x, y] = (*NAVY_DEEP, alpha)
    return Image.alpha_composite(image.convert("RGBA"), overlay)


def rounded_label(draw: ImageDraw.ImageDraw) -> None:
    box = (70, 58, 407, 106)
    draw.rounded_rectangle(box, radius=24, fill=(13, 35, 68, 226), outline=(74, 133, 205, 170), width=1)
    draw.ellipse((91, 76, 105, 90), fill=LIME)
    label_font = font("IBMPlexMono-Medium.ttf", 16)
    draw.text((120, 70), "BUILDERS LAB · COURSE 01", font=label_font, fill=MUTED)


def add_signal_details(draw: ImageDraw.ImageDraw) -> None:
    mono = font("IBMPlexMono-Medium.ttf", 15)
    small = font("IBMPlexMono-Regular.ttf", 13)

    draw.text((72, 554), "SCOPE", font=mono, fill=MUTED)
    draw.line((132, 564, 171, 564), fill=BLUE, width=2)
    draw.ellipse((167, 560, 175, 568), fill=CYAN)
    draw.text((189, 554), "MAP", font=mono, fill=MUTED)
    draw.line((231, 564, 270, 564), fill=BLUE, width=2)
    draw.ellipse((266, 560, 274, 568), fill=CYAN)
    draw.text((288, 554), "BUILD", font=mono, fill=MUTED)
    draw.line((347, 564, 386, 564), fill=BLUE, width=2)
    draw.ellipse((382, 560, 390, 568), fill=LIME)
    draw.text((404, 554), "TEST", font=mono, fill=MUTED)

    draw.text((72, 628), "SYSTEM PACK SPRINT", font=small, fill=MUTED)
    draw.line((72, 612, 481, 612), fill=(38, 65, 105), width=1)
    draw.line((72, 612, 218, 612), fill=BLUE, width=3)
    draw.line((218, 612, 270, 612), fill=LIME, width=3)


def generate() -> Path:
    if not RAW_ART.exists():
        raise FileNotFoundError(f"Missing established Builders Lab artwork: {RAW_ART}")

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    raw = Image.open(RAW_ART).convert("RGB")
    canvas = ImageOps.fit(raw, (WIDTH, HEIGHT), method=Image.Resampling.LANCZOS, centering=(0.50, 0.50)).convert("RGBA")
    canvas = add_left_readability_gradient(canvas)
    draw = ImageDraw.Draw(canvas, "RGBA")

    rounded_label(draw)

    title_font = font("Manrope-Variable.ttf", 76, "ExtraBold")
    subtitle_font = font("Manrope-Variable.ttf", 29, "Bold")
    supporting_font = font("Manrope-Variable.ttf", 21, "Medium")

    draw.text((70, 165), "AI Systems", font=title_font, fill=WHITE)
    draw.text((70, 248), "Builder Sprint", font=title_font, fill=LIGHT_BLUE)

    draw.line((72, 359, 427, 359), fill=BLUE, width=6)
    draw.line((427, 359, 498, 359), fill=LIME, width=6)

    draw.text((70, 400), "Build one useful system", font=subtitle_font, fill=WHITE)
    draw.text((70, 440), "in four weeks.", font=subtitle_font, fill=WHITE)
    draw.text((72, 497), "One user. One workflow. Visible evidence.", font=supporting_font, fill=MUTED)

    add_signal_details(draw)

    # Sparse network points extend the established systems motif into the title field.
    draw.line((520, 445, 593, 414, 647, 444), fill=(70, 220, 255, 90), width=1)
    for x, y, color in [(520, 445, CYAN), (593, 414, LIME), (647, 444, BLUE)]:
        draw.ellipse((x - 3, y - 3, x + 3, y + 3), fill=(*color, 210))

    final = canvas.convert("RGB")
    final.save(OUTPUT, format="PNG", optimize=True)
    return OUTPUT


if __name__ == "__main__":
    print(generate())
