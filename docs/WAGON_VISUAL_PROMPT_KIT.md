# Wagon Style Visual Prompt Kit

## Goal
- Keep all hero/gallery/video visuals in one brand language:
  - white canvas roof
  - warm wood body
  - classic wagon wheels
  - sunset or blue-hour cinematic light
  - premium but realistic glamping mood

## Global Prompt Base
Use this base in every prompt:

```text
Luxury wagon-style glamping cabin, white canvas curved roof, warm walnut wood exterior, classic white wagon wheels, realistic proportions, premium campsite staging, cinematic natural light, high-detail textures, clean composition, no distortion, no text, no logo, photorealistic
```

## Negative Prompt Base
```text
cartoon, anime, 3d render look, low-res, blurry, over-saturated, fisheye distortion, deformed wheels, extra wheels, broken geometry, watermark, logo, text overlay, people close-up
```

## Shot Prompts (Image)

### 1) Hero Still (`/public/hero.jpg`)
```text
[BASE PROMPT], sunrise over misty valley, warm lantern glow from wagon window, campfire in foreground, string lights, wide cinematic framing, 16:9, website hero image, strong depth, premium hospitality mood
```

### 2) Interior Mood (`/public/interior.jpg`)
```text
Wagon-style glamping interior seen from side window and doorway, warm ambient lighting, premium bedding and wood details, cozy but minimal decor, realistic lens, 4:5 vertical crop safe, photorealistic hospitality photo
```

### 3) Private Spa Scene (`/public/hottub.jpg`)
```text
Wagon-style glamping unit with private outdoor hot tub area at dusk, steam, lanterns, natural stone and wood deck, calm forest atmosphere, cinematic but realistic, 4:5 composition
```

### 4) Dining Scene (`/public/dinner.jpg`)
```text
Wagon-style glamping dinner setup outdoors, wooden picnic table, candlelight, wine glasses, warm sunset sky, wagon in background, intimate premium mood, realistic food styling, 4:5 composition
```

### 5) Collection Valley (`/public/collection-wagon-valley.jpg`)
```text
[BASE PROMPT], elevated valley viewpoint, soft morning fog layers, wagon centered with strong wheel visibility, deck and path details, premium retreat mood, 4:3 composition
```

### 6) Collection Forest (`/public/collection-wagon-forest.jpg`)
```text
[BASE PROMPT], deep forest site plan with one hero wagon in foreground and subtle supporting wagons in background, warm practical lights, cinematic depth, realistic campsite design, 4:3 composition
```

## Video Prompt (Loop Background)

### Hero Video (`/public/videos/campfire.mp4`)
```text
Slow cinematic dolly shot of a wagon-style glamping cabin at blue hour, white canvas roof and wood body, warm interior light flicker, gentle campfire flames in foreground, subtle moving fog, no people, seamless 8-second loop, stable camera, realistic motion, photorealistic
```

Recommended output settings:
- Duration: 8 to 10 seconds
- FPS: 24 or 30
- Aspect: 16:9
- Movement: subtle only (hero background safe)
- Export: H.264 MP4, web-optimized bitrate

## Color Grade Targets
- Temperature: warm
- Contrast: medium-high
- Saturation: controlled (avoid neon orange)
- Blacks: soft, not crushed
- Highlights: preserve detail around sky and lanterns

## Consistency Rules
- Keep wagon shape consistent across all assets.
- Always show wagon wheels clearly in at least one-third of shots.
- Use one unified palette: warm amber + deep green + neutral sky tones.
- Avoid mixing visual styles (CG look vs documentary look).
