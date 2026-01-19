#!/bin/bash

# Create placeholder images
mkdir -p public/assets/images public/assets/textures

# Create SVG-to-PNG placeholders
for img in \
  "halle_hiver_exterieur.jpg" \
  "atmosphere_lumiere.jpg" \
  "atmosphere_echange.jpg" \
  "atmosphere_vie.jpg" \
  "croquis_initial.jpg" \
  "charpente_bois.jpg" \
  "halle_finale.jpg"
do
  # Create a simple PNG placeholder using ImageMagick if available, otherwise use a fallback
  convert -size 1200x800 xc:"#d4cfc8" \
    -gravity center \
    -pointsize 24 \
    -fill "#5a5752" \
    -annotate +0+0 "Image: $img" \
    "public/assets/images/$img" 2>/dev/null || \
    printf '\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00\x04\xb0\x00\x00\x03 \x08\x02\x00\x00\x00\x12\x7f\x84\xc6\x00\x00\x00\x1dIDATx\xda\xed\xc1\x01\x0d\x00\x00\x00\xc2\xa0\xf5OF\xed\x61\x0e\xa0\x00\x00\x00\x00\x00\x00\x00\x00\xbe\r!\x00\x00\x01\x9b\x80\x01\xd5o\xce\x7f\x00\x00\xff\xff\x03\x00\x00\x01\x00\x01P\x02\xe0\x55\x00\x00\x00\x00IEND\xaeB\x60\x82' > "public/assets/images/$img"
done

# Create texture images
for texture in "snow.png" "dark-matter.png" "asfalt-light.png"; do
  convert -size 512x512 xc:"#ffffff" \
    -modulate 80 \
    "public/assets/textures/$texture" 2>/dev/null || \
    printf '\x89PNG\r\n\x1a\n' > "public/assets/textures/$texture"
done

echo "Placeholders created!"
