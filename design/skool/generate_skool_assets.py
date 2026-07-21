from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
import math

OUT = Path(__file__).resolve().parent

# Colors
NAVY = (8, 18, 35)
NAVY_2 = (12, 27, 52)
BLUE = (45, 137, 255)
CYAN = (70, 220, 255)
LIME = (154, 255, 93)
WHITE = (244, 248, 255)
MUTED = (169, 186, 210)
GRID = (38, 65, 105)
CARD = (13, 31, 59)
SKIN = (134, 83, 55)
SKIN_HI = (176, 112, 76)
HAIR = (28, 22, 20)
SHIRT = (210, 221, 213)
SHIRT_DARK = (154, 170, 165)

FONT_REG = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
FONT_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
FONT_SEMI = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"

def font(path, size):
    return ImageFont.truetype(path, size)

def rounded_rect(draw, xy, radius, fill=None, outline=None, width=1):
    draw.rounded_rectangle(xy, radius=radius, fill=fill, outline=outline, width=width)

def gradient_background(w, h):
    img = Image.new("RGB", (w, h), NAVY)
    px = img.load()
    for y in range(h):
        for x in range(w):
            t = y / max(1, h - 1)
            r = int(NAVY[0] * (1 - t) + NAVY_2[0] * t)
            g = int(NAVY[1] * (1 - t) + NAVY_2[1] * t)
            b = int(NAVY[2] * (1 - t) + NAVY_2[2] * t)
            dx = (x - w * 0.80) / w
            dy = (y - h * 0.24) / h
            glow = max(0, 1 - math.sqrt(dx * dx + dy * dy) * 3.0)
            r = int(r + BLUE[0] * glow * 0.25)
            g = int(g + BLUE[1] * glow * 0.25)
            b = int(b + BLUE[2] * glow * 0.25)
            dx2 = (x - w * 0.93) / w
            dy2 = (y - h * 0.90) / h
            glow2 = max(0, 1 - math.sqrt(dx2 * dx2 + dy2 * dy2) * 4.0)
            r = int(r + LIME[0] * glow2 * 0.11)
            g = int(g + LIME[1] * glow2 * 0.11)
            b = int(b + LIME[2] * glow2 * 0.11)
            px[x, y] = (min(255, r), min(255, g), min(255, b))
    return img

def draw_grid(draw, w, h, step=36):
    for x in range(0, w, step):
        alpha = 42 if x % (step * 3) else 72
        draw.line((x, 0, x, h), fill=(*GRID, alpha), width=1)
    for y in range(0, h, step):
        alpha = 42 if y % (step * 3) else 72
        draw.line((0, y, w, y), fill=(*GRID, alpha), width=1)

def draw_ai_nodes(draw, offset=(0, 0), scale=1.0):
    ox, oy = offset
    def p(x, y):
        return (ox + x * scale, oy + y * scale)
    def box(cx, cy, label, accent, w=104, h=48):
        x1, y1 = p(cx - w/2, cy - h/2)
        x2, y2 = p(cx + w/2, cy + h/2)
        rounded_rect(draw, (x1, y1, x2, y2), int(14*scale), fill=(13, 35, 68, 230), outline=(*accent, 185), width=max(1, int(2*scale)))
        f = font(FONT_SEMI, max(10, int(15*scale)))
        tw = draw.textlength(label, font=f)
        draw.text((ox + cx*scale - tw/2, oy + cy*scale - int(9*scale)), label, font=f, fill=WHITE)
    line = (111, 170, 245, 145)
    for a, b in [((118, 54), (226, 54)), ((172, 78), (172, 132)), ((118, 156), (226, 156)), ((226, 78), (226, 132))]:
        draw.line((*p(*a), *p(*b)), fill=line, width=max(2, int(3*scale)))
    box(118, 54, "Domain", CYAN)
    box(226, 54, "Systems", BLUE)
    box(118, 156, "AI Flow", LIME)
    box(226, 156, "SEO Ops", WHITE)

def draw_george_at_computer(draw, x=650, y=132, s=1.0):
    # Back card
    rounded_rect(draw, (x-34*s, y-48*s, x+334*s, y+316*s), int(30*s), fill=(9, 24, 48, 176), outline=(74, 133, 205, 120), width=max(1, int(2*s)))

    # Floating AI nodes behind character
    draw_ai_nodes(draw, offset=(x+72*s, y-8*s), scale=0.62*s)

    # Chair glow / body shadow
    draw.ellipse((x+74*s, y+230*s, x+276*s, y+302*s), fill=(4, 12, 25, 135))

    # Torso / shirt
    draw.pieslice((x+90*s, y+154*s, x+266*s, y+344*s), 180, 360, fill=SHIRT, outline=(120, 141, 143, 180), width=max(1, int(2*s)))
    draw.polygon([(x+132*s, y+160*s), (x+182*s, y+216*s), (x+230*s, y+160*s)], fill=(224, 232, 225))
    draw.line((x+181*s, y+198*s, x+181*s, y+274*s), fill=SHIRT_DARK, width=max(1, int(2*s)))
    for by in [218, 240, 262]:
        draw.ellipse((x+176*s, y+by*s, x+186*s, y+(by+10)*s), fill=(110, 126, 124))

    # Neck
    rounded_rect(draw, (x+154*s, y+132*s, x+208*s, y+179*s), int(16*s), fill=SKIN, outline=None)

    # Head
    draw.ellipse((x+118*s, y+34*s, x+244*s, y+169*s), fill=SKIN, outline=(92, 55, 39), width=max(1, int(2*s)))
    # Hair cap, closely cropped
    draw.pieslice((x+123*s, y+27*s, x+239*s, y+100*s), 180, 360, fill=HAIR)
    draw.arc((x+124*s, y+31*s, x+238*s, y+106*s), 180, 360, fill=(50, 42, 39), width=max(2, int(4*s)))

    # Ears
    draw.ellipse((x+108*s, y+86*s, x+130*s, y+121*s), fill=SKIN_HI, outline=(92, 55, 39), width=max(1, int(1*s)))
    draw.ellipse((x+232*s, y+86*s, x+254*s, y+121*s), fill=SKIN_HI, outline=(92, 55, 39), width=max(1, int(1*s)))

    # Face highlights
    draw.ellipse((x+151*s, y+80*s, x+164*s, y+91*s), fill=(54, 34, 28))
    draw.ellipse((x+198*s, y+80*s, x+211*s, y+91*s), fill=(54, 34, 28))
    draw.arc((x+162*s, y+93*s, x+200*s, y+124*s), 0, 180, fill=(91, 52, 38), width=max(1, int(2*s)))

    # Glasses
    glass = (226, 238, 245, 235)
    draw.rounded_rectangle((x+138*s, y+72*s, x+172*s, y+99*s), radius=int(8*s), outline=glass, width=max(2, int(3*s)))
    draw.rounded_rectangle((x+190*s, y+72*s, x+224*s, y+99*s), radius=int(8*s), outline=glass, width=max(2, int(3*s)))
    draw.line((x+172*s, y+84*s, x+190*s, y+84*s), fill=glass, width=max(1, int(2*s)))
    draw.line((x+136*s, y+82*s, x+122*s, y+76*s), fill=glass, width=max(1, int(2*s)))
    draw.line((x+226*s, y+82*s, x+240*s, y+76*s), fill=glass, width=max(1, int(2*s)))

    # Mustache / goatee
    draw.arc((x+158*s, y+111*s, x+202*s, y+131*s), 190, 350, fill=(38, 26, 23), width=max(2, int(3*s)))
    draw.rounded_rectangle((x+171*s, y+128*s, x+192*s, y+151*s), radius=int(10*s), fill=(38, 26, 23))
    draw.arc((x+153*s, y+126*s, x+210*s, y+152*s), 10, 170, fill=(58, 34, 28), width=max(1, int(2*s)))

    # Arms
    rounded_rect(draw, (x+72*s, y+218*s, x+140*s, y+252*s), int(17*s), fill=SKIN, outline=(92, 55, 39), width=max(1, int(1*s)))
    rounded_rect(draw, (x+220*s, y+218*s, x+288*s, y+252*s), int(17*s), fill=SKIN, outline=(92, 55, 39), width=max(1, int(1*s)))

    # Laptop
    rounded_rect(draw, (x+86*s, y+194*s, x+278*s, y+296*s), int(16*s), fill=(16, 36, 67), outline=(104, 172, 255, 210), width=max(2, int(3*s)))
    draw.rectangle((x+103*s, y+212*s, x+261*s, y+274*s), fill=(7, 17, 32))
    f = font(FONT_BOLD, int(36*s))
    draw.text((x+147*s, y+220*s), "AI", font=f, fill=LIME)
    draw.rounded_rectangle((x+52*s, y+292*s, x+314*s, y+318*s), radius=int(12*s), fill=(42, 77, 116), outline=(117, 180, 255, 140), width=max(1, int(2*s)))
    draw.line((x+142*s, y+306*s, x+224*s, y+306*s), fill=(143, 199, 255), width=max(1, int(2*s)))


def draw_cover_text(draw):
    pill_font = font(FONT_SEMI, 22)
    rounded_rect(draw, (70, 64, 370, 108), 22, fill=(13, 35, 68, 218), outline=(74, 133, 205, 135), width=1)
    draw.ellipse((91, 80, 104, 93), fill=LIME)
    draw.text((118, 73), "Build-in-public lab", font=pill_font, fill=MUTED)

    title_font = font(FONT_BOLD, 82)
    sub_font = font(FONT_SEMI, 31)
    by_font = font(FONT_REG, 23)
    draw.text((70, 165), "Builders", font=title_font, fill=WHITE)
    draw.text((70, 254), "Lab", font=title_font, fill=(173, 214, 255))
    draw.line((72, 354, 430, 354), fill=BLUE, width=5)
    draw.line((430, 354, 496, 354), fill=LIME, width=5)
    draw.text((70, 382), "Practical AI-powered systems", font=sub_font, fill=WHITE)
    draw.text((70, 426), "from real domain expertise.", font=sub_font, fill=WHITE)
    draw.text((72, 496), "By George Johnson", font=by_font, fill=MUTED)

def make_cover():
    w, h = 1084, 576
    img = gradient_background(w, h).convert("RGBA")
    overlay = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    draw_grid(draw, w, h)
    draw_cover_text(draw)
    draw_george_at_computer(draw, x=664, y=118, s=1.0)
    img = Image.alpha_composite(img, overlay).convert("RGB")
    img.save(OUT / "builders-lab-skool-cover-1084x576.png", quality=95)

def make_icon():
    s = 128
    img = gradient_background(s, s).convert("RGBA")
    overlay = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    draw_grid(draw, s, s, step=16)
    rounded_rect(draw, (9, 9, 119, 119), 24, fill=(9, 24, 48, 190), outline=(71, 151, 255, 195), width=2)

    # Simplified George-at-computer icon.
    draw.ellipse((43, 22, 86, 68), fill=SKIN, outline=(92, 55, 39), width=1)
    draw.pieslice((45, 18, 84, 46), 180, 360, fill=HAIR)
    draw.rounded_rectangle((48, 37, 60, 47), radius=3, outline=WHITE, width=2)
    draw.rounded_rectangle((69, 37, 81, 47), radius=3, outline=WHITE, width=2)
    draw.line((60, 42, 69, 42), fill=WHITE, width=1)
    draw.arc((55, 51, 75, 61), 190, 350, fill=(38, 26, 23), width=2)
    draw.rounded_rectangle((61, 58, 69, 69), radius=4, fill=(38, 26, 23))
    draw.pieslice((36, 63, 94, 119), 180, 360, fill=SHIRT, outline=(120, 141, 143), width=1)
    draw.rounded_rectangle((25, 72, 103, 106), radius=8, fill=(16, 36, 67), outline=(104, 172, 255), width=2)
    f = font(FONT_BOLD, 20)
    draw.text((52, 78), "AI", font=f, fill=LIME)
    draw.rounded_rectangle((19, 103, 109, 115), radius=6, fill=(42, 77, 116))

    img = Image.alpha_composite(img, overlay).convert("RGB")
    img.save(OUT / "builders-lab-skool-icon-128x128.png", quality=95)

if __name__ == "__main__":
    OUT.mkdir(parents=True, exist_ok=True)
    make_cover()
    make_icon()
    print(OUT / "builders-lab-skool-cover-1084x576.png")
    print(OUT / "builders-lab-skool-icon-128x128.png")
