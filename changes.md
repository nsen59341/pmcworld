## Changes Made

### YouTube Video Modal for "Quick 20 minutes meditation"

**File modified:** `app/components/RefSiteSections.tsx`

- Added `AnimatePresence` to the framer-motion import
- Added `showMeditationVideo` state to the `MeditationNow` component
- Added `cursor-pointer` class and `onClick` handler to the meditation card to open the modal
- Created a full-screen modal with:
  - Backdrop blur overlay
  - YouTube iframe embed of `https://youtu.be/aVkehicsHao` (autoplay enabled)
  - Close button (X icon) in the top-right corner
  - Click-outside-to-close behavior
  - Framer Motion scale/fade animations
  - Gold (`#D4AF37`) accent border matching the site theme

### Reordered "Be A Meditator" section layout

**File modified:** `app/components/RefSiteSections.tsx`

- Changed grid from side-by-side (`lg:grid-cols-[1.1fr_0.9fr]`) to a stacked single-column layout
- Text content (label, heading, paragraph) is now centered on top
- Meditation card image is placed below the text with `mt-16` spacing, centered and capped at `max-w-lg`
- Both text and image cards are now parallel (vertically stacked, both centered) instead of side-by-side

### Mobile layout: portrait above video on about-patriji page

**File modified:** `app/about-patriji/page.tsx`

- **Mobile:** Portrait card (≈70% visual weight) stacked above video card (≈30%), both with soft shadows
- A thin 40×6px `#3674CF` inline SVG connector sits exactly between the two cards, with concave/reverse-rounded ends (inward-curving bezier edges) — no white background bar
- **Desktop:** Original layout preserved — portrait (2fr) side by side with text (1fr), logos + video below
- Desktop video in the logos section is now `hidden lg:flex` to avoid duplication with the mobile row
