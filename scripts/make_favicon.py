from PIL import Image

SRC = "public/images/logos/northassurance-logo.png"  # white wordmark on transparent
NAVY = (21, 35, 60, 255)  # #15233c

logo = Image.open(SRC).convert("RGBA")
w, h = logo.size  # 567 x 244

# The emblem is the left portion of the wordmark; crop and trim to its content.
emblem = logo.crop((0, 0, 180, h))
bbox = emblem.getbbox()
emblem = emblem.crop(bbox)
ew, eh = emblem.size
print("emblem size", emblem.size)

def make_icon(size):
    canvas = Image.new("RGBA", (size, size), NAVY)
    pad = int(size * 0.18)
    target = size - 2 * pad
    scale = min(target / ew, target / eh)
    nw, nh = max(1, int(ew * scale)), max(1, int(eh * scale))
    em = emblem.resize((nw, nh), Image.LANCZOS)
    canvas.alpha_composite(em, ((size - nw) // 2, (size - nh) // 2))
    return canvas

# Preview
make_icon(256).save("C:/tmp/favicon_preview.png")

# Real outputs
make_icon(512).convert("RGB").save("public/images/logos/logo-512.png")
make_icon(192).convert("RGB").save("public/images/logos/logo-192.png")
make_icon(180).convert("RGB").save("public/images/logos/apple-touch-icon.png")
make_icon(512).save("public/images/logos/logo.png")
# Multi-size .ico
ico = make_icon(64)
ico.save("public/favicon.ico", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
print("favicon + app icons written")
