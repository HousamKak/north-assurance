from PIL import Image

src = "public/images/logos/northassurance-logo.png"
im = Image.open(src).convert("RGBA")

# White version (as downloaded) — for dark backgrounds
im.save("public/images/logos/northassurance-logo-white.png")

# Navy version — recolor opaque pixels to brand navy (#15233c), preserve alpha
navy = (21, 35, 60)
px = im.load()
out = Image.new("RGBA", im.size)
po = out.load()
for y in range(im.size[1]):
    for x in range(im.size[0]):
        _, _, _, a = px[x, y]
        po[x, y] = (navy[0], navy[1], navy[2], a)
out.save("public/images/logos/northassurance-logo-navy.png")

print("saved white + navy versions")
