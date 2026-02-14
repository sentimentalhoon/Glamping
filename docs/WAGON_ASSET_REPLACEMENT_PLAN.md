# Wagon Asset Replacement Plan

## Current Asset Mapping
- `glampingProject/public/hero.jpg` -> wagon hero still
- `glampingProject/public/interior.jpg` -> wagon interior mood shot
- `glampingProject/public/hottub.jpg` -> wagon + private spa shot
- `glampingProject/public/dinner.jpg` -> wagon dining shot
- `glampingProject/public/videos/campfire.mp4` -> wagon hero loop video

## Where They Are Used
- `glampingProject/components/home/Hero.tsx`
  - background image fallback: `/hero.jpg`
  - background video: `/videos/campfire.mp4`
- `glampingProject/components/home/Gallery.tsx`
  - gallery image list uses all four JPG files
- `glampingProject/components/home/TheCollection.tsx`
  - wagon collection images:
    - `/collection-wagon-valley.jpg`
    - `/collection-wagon-forest.jpg`

## Replacement Checklist
1. Generate assets using `docs/WAGON_VISUAL_PROMPT_KIT.md`.
2. Keep exact filenames above for zero-code replacement.
3. Export optimized files:
   - JPG: target <= 500 KB each (hero can be larger if quality demands).
   - MP4: target <= 6 MB for smooth first load.
4. Overwrite files in `glampingProject/public/` and `glampingProject/public/videos/`.
5. Run local check:
   - Desktop and mobile hero loading
   - low-power fallback image path in `Hero.tsx`
   - gallery crop quality in `Gallery.tsx`
6. If needed, add new wagon-specific filenames later and update component paths.

## Collection Upgrade Status
- Completed on February 14, 2026:
  - `TheCollection.tsx` now points to wagon-specific image files.
  - placeholder files were added in `public/` for non-breaking rendering.

## Practical Optimization Commands
Use these after replacing with final generated assets.

### JPG (ImageMagick)
```powershell
magick glampingProject/public/hero.jpg -strip -sampling-factor 4:2:0 -quality 82 glampingProject/public/hero.jpg
magick glampingProject/public/interior.jpg -strip -sampling-factor 4:2:0 -quality 82 glampingProject/public/interior.jpg
magick glampingProject/public/hottub.jpg -strip -sampling-factor 4:2:0 -quality 82 glampingProject/public/hottub.jpg
magick glampingProject/public/dinner.jpg -strip -sampling-factor 4:2:0 -quality 82 glampingProject/public/dinner.jpg
```

### MP4 (FFmpeg)
```powershell
ffmpeg -i glampingProject/public/videos/campfire.mp4 -vcodec libx264 -crf 24 -preset medium -movflags +faststart -an glampingProject/public/videos/campfire.optimized.mp4
```

Then replace:
```powershell
Move-Item -Force glampingProject/public/videos/campfire.optimized.mp4 glampingProject/public/videos/campfire.mp4
```
