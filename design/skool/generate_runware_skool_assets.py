#!/usr/bin/env python3
"""Generate Builders Lab Skool cover/icon with Runware Nano Banana.

Loads the Runware API key from AtsKaleSEO .env files without printing it.
Uploads the George B. Johnson website photo as a reference image, generates
AI artwork, and composites final Skool-sized assets with clean typography.
"""
from __future__ import annotations

import base64
import json
import os
import time
import uuid
from pathlib import Path
from typing import Any
from urllib import request, error

from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = Path("/home/heman1320/GeorgeBJohnson")
OUT = ROOT / "design" / "skool"
REF_IMAGE = ROOT / "public" / "wp-content" / "uploads" / "George-B.-Johnson.jpg"
ENV_FILES = [Path("/home/heman1320/AtsKaleSEO/.env"), Path("/home/heman1320/AtsKaleSEO/cli/.env")]
API_URL = "https://api.runware.ai/v1"
MODEL = os.environ.get("RUNWARE_MODEL", "google:4@1")  # Nano Banana by Google

FONT_REG = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
FONT_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"


def load_api_key() -> str:
    for key in ("RUNWARE_API_KEY", "RUNWARE_KEY", "RUNWARE"):
        if os.environ.get(key):
            return os.environ[key]
    for env_file in ENV_FILES:
        if not env_file.exists():
            continue
        for line in env_file.read_text(errors="ignore").splitlines():
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            k, v = line.split("=", 1)
            if k.strip() in {"RUNWARE_API_KEY", "RUNWARE_KEY", "RUNWARE"}:
                return v.strip().strip('"').strip("'")
    raise RuntimeError("Runware API key not found in env")


def post_runware(tasks: list[dict[str, Any]], api_key: str, timeout: int = 180) -> dict[str, Any]:
    data = json.dumps(tasks).encode("utf-8")
    req = request.Request(
        API_URL,
        data=data,
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
        method="POST",
    )
    try:
        with request.urlopen(req, timeout=timeout) as resp:
            body = resp.read().decode("utf-8")
            return json.loads(body)
    except error.HTTPError as exc:
        body = exc.read().decode("utf-8", "ignore")
        raise RuntimeError(f"Runware HTTP {exc.code}: {body[:1200]}") from exc


def data_uri(path: Path) -> str:
    mime = "image/jpeg" if path.suffix.lower() in {".jpg", ".jpeg"} else "image/png"
    return f"data:{mime};base64," + base64.b64encode(path.read_bytes()).decode("ascii")


def upload_reference(api_key: str) -> str:
    task_uuid = str(uuid.uuid4())
    result = post_runware([
        {
            "taskType": "imageUpload",
            "taskUUID": task_uuid,
            "image": data_uri(REF_IMAGE),
        }
    ], api_key)
    if "errors" in result:
        raise RuntimeError(json.dumps(result["errors"], indent=2))
    item = result.get("data", [{}])[0]
    return item.get("imageUUID") or item.get("imageURL") or item.get("imageURI")


def generate(api_key: str, reference_uuid: str, prompt: str, width: int, height: int, name: str) -> dict[str, Any]:
    task = {
        "taskType": "imageInference",
        "taskUUID": str(uuid.uuid4()),
        "model": MODEL,
        "positivePrompt": prompt,
        "inputs": {"referenceImages": [reference_uuid]},
        "width": width,
        "height": height,
        "outputFormat": "PNG",
        "outputType": "URL",
        "numberResults": 1,
    }
    result = post_runware([task], api_key, timeout=240)
    if "errors" in result:
        raise RuntimeError(json.dumps(result["errors"], indent=2))
    item = result.get("data", [{}])[0]
    url = item.get("imageURL") or item.get("imageURI") or item.get("url")
    if not url:
        raise RuntimeError(f"No image URL returned for {name}: {json.dumps(result)[:1200]}")
    raw_path = OUT / f"runware-raw-{name}.png"
    request.urlretrieve(url, raw_path)
    item["localPath"] = str(raw_path)
    return item


def fit_cover(img: Image.Image, size: tuple[int, int]) -> Image.Image:
    w, h = img.size
    tw, th = size
    scale = max(tw / w, th / h)
    nw, nh = int(w * scale + 0.5), int(h * scale + 0.5)
    img = img.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - tw) // 2
    top = (nh - th) // 2
    return img.crop((left, top, left + tw, top + th))


def font(path: str, size: int):
    return ImageFont.truetype(path, size)


def final_cover(raw_path: Path):
    W, H = 1084, 576
    art = fit_cover(Image.open(raw_path).convert("RGB"), (W, H)).convert("RGBA")

    # The model can occasionally invent laptop brand marks; neutralize that area
    # so the final public asset does not contain third-party logos.
    logo_patch = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    pd = ImageDraw.Draw(logo_patch)
    pd.rounded_rectangle((602, 388, 686, 442), radius=16, fill=(45, 54, 70, 245))
    pd.rounded_rectangle((611, 397, 677, 432), radius=13, fill=(54, 64, 80, 245))
    pd.ellipse((626, 403, 664, 428), fill=(69, 86, 103, 120))
    pd.line((613, 399, 674, 429), fill=(96, 116, 134, 70), width=2)
    art = Image.alpha_composite(art, logo_patch.filter(ImageFilter.GaussianBlur(0.4)))

    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Left-side readability gradient.
    for x in range(0, 650):
        alpha = int(218 * (1 - x / 650))
        draw.line((x, 0, x, H), fill=(6, 15, 29, alpha), width=1)
    draw.rectangle((0, 0, W, H), outline=(38, 82, 135, 90), width=2)

    white = (244, 248, 255, 255)
    muted = (182, 199, 222, 255)
    blue = (68, 150, 255, 255)
    lime = (154, 255, 93, 255)

    # Pill
    draw.rounded_rectangle((70, 64, 370, 108), radius=22, fill=(13, 35, 68, 225), outline=(74, 133, 205, 150), width=1)
    draw.ellipse((91, 80, 104, 93), fill=lime)
    draw.text((118, 73), "Build-in-public lab", font=font(FONT_BOLD, 22), fill=muted)

    # Main copy
    title = font(FONT_BOLD, 82)
    sub = font(FONT_BOLD, 31)
    by = font(FONT_REG, 23)
    draw.text((70, 165), "Builders", font=title, fill=white)
    draw.text((70, 254), "Lab", font=title, fill=(181, 219, 255, 255))
    draw.line((72, 354, 430, 354), fill=blue, width=5)
    draw.line((430, 354, 496, 354), fill=lime, width=5)
    draw.text((70, 382), "Practical AI-powered systems", font=sub, fill=white)
    draw.text((70, 426), "from real domain expertise.", font=sub, fill=white)
    draw.text((72, 496), "By George Johnson", font=by, fill=muted)

    final = Image.alpha_composite(art, overlay).convert("RGB")
    final.save(OUT / "builders-lab-skool-cover-1084x576.png", quality=95)


def final_icon(raw_path: Path):
    raw = Image.open(raw_path).convert("RGB")
    icon = fit_cover(raw, (128, 128)).convert("RGBA")
    mask = Image.new("L", (128, 128), 0)
    md = ImageDraw.Draw(mask)
    md.rounded_rectangle((0, 0, 127, 127), radius=28, fill=255)
    icon.putalpha(mask)
    bg = Image.new("RGBA", (128, 128), (8, 18, 35, 255))
    bg.alpha_composite(icon)
    d = ImageDraw.Draw(bg)
    d.rounded_rectangle((2, 2, 125, 125), radius=26, outline=(80, 159, 255, 220), width=2)
    bg.convert("RGB").save(OUT / "builders-lab-skool-icon-128x128.png", quality=95)


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    api_key = load_api_key()
    reference_uuid = upload_reference(api_key)

    cover_prompt = (
        "Use the reference photo only to preserve the man's key likeness: Black man, glasses, short hair, neat mustache and goatee, friendly professional expression. "
        "Create a polished modern AI-generated illustration, not flat vector art, of him seated at a laptop in a dark navy technology lab. "
        "He is on the right side of a wide Skool community cover with generous clean empty space on the left for typography. "
        "Laptop glow, subtle blue and lime AI workflow nodes, premium founder-led build-in-public community feeling. "
        "Rounded, dimensional, warm, professional, high-quality digital art, soft lighting, clean composition. "
        "No words, no labels, no logos, no watermarks, no distorted hands, no course hype."
    )
    icon_prompt = (
        "Use the reference photo to create a polished rounded AI-generated icon portrait of the same man: glasses, short hair, neat mustache and goatee, friendly professional expression. "
        "He is seated at a laptop with a subtle blue/lime AI glow, dark navy background, centered composition, readable at small size. "
        "Dimensional modern digital art, not flat vector art. No words, no logos, no watermarks."
    )

    # Nano Banana supports fixed aspect buckets; generate 16:9 and crop to Skool's 1084x576.
    cover = generate(api_key, reference_uuid, cover_prompt, 1344, 768, "cover")
    icon = generate(api_key, reference_uuid, icon_prompt, 1024, 1024, "icon")
    final_cover(Path(cover["localPath"]))
    final_icon(Path(icon["localPath"]))

    metadata = {
        "model": MODEL,
        "referenceImage": str(REF_IMAGE),
        "generatedAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "cover": cover,
        "icon": icon,
        "finalFiles": {
            "cover": str(OUT / "builders-lab-skool-cover-1084x576.png"),
            "icon": str(OUT / "builders-lab-skool-icon-128x128.png"),
        },
    }
    (OUT / "runware-skool-assets.json").write_text(json.dumps(metadata, indent=2))
    print(metadata["finalFiles"]["cover"])
    print(metadata["finalFiles"]["icon"])


if __name__ == "__main__":
    main()
