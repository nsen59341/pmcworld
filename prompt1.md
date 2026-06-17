Before making any mobile-related changes, always test and validate both **Portrait** and **Landscape** orientations. A change is not considered complete until it works correctly in both modes.

## Mobile Fixes Required

### 1. Mobile Navigation Menu Missing

Current Issue:

* The mobile version has no accessible navigation menu.

Requirements:

* Implement a fully functional mobile menu.
* Ensure users can access all primary navigation links.
* Add proper open/close behavior with smooth animations.
* Verify menu visibility, z-index, scrolling behavior, and touch interactions.
* Ensure the menu works correctly in both portrait and landscape modes.

Acceptance Criteria:

* Users can navigate the entire website from mobile devices.
* No menu overlap, clipping, or inaccessible links.

---

### 2. Add Patriji Video to Mobile Hero Section

Current Issue:

* The Patriji video is not visible or accessible in the mobile hero section.

Requirements:

* Add the Patriji video to the mobile hero section.
* Maintain visual consistency with the desktop design.
* Ensure the video scales properly across different mobile screen sizes.
* Prevent layout shifts, overflow, or content overlap.

Acceptance Criteria:

* Patriji video is clearly visible and properly positioned in the mobile hero section.
* Video remains responsive in portrait and landscape orientations.

---

### 3. Reduce Footer Spacing

Current Issue:

* Excessive vertical spacing exists between items under the Resources and Programs sections in the mobile footer.

Requirements:

* Reduce the spacing between footer links/items.
* Maintain readability while making the footer more compact.
* Keep visual consistency with the existing design system.

Acceptance Criteria:

* Footer occupies less vertical space without appearing crowded.
* Resources and Programs sections look clean and organized.

---

### 4. Hide Homepage Slider Navigation Indicators

Requirements:

* Remove or hide all slider pagination dots, indicators, transition buttons, and navigation markers on the Home page.

Example:

```html
<button class="h-3 rounded-full transition-all w-8 bg-[#D4AF37]"></button>
```

* The slider should continue functioning normally.
* Only the visual indicators should be hidden.

Acceptance Criteria:

* No pagination dots or transition indicators are visible.
* Slider functionality remains intact.

---

### 5. Fix Patriji Event Modal on Mobile

Current Issue:

* The Patriji event modal does not display correctly on mobile devices.

Requirements:

* Ensure the modal is fully responsive.
* Verify sizing, positioning, scrolling, overlay behavior, and close actions.
* Prevent content clipping or overflow.
* Ensure the modal remains usable in landscape mode.

Acceptance Criteria:

* Modal is fully visible and functional on all mobile devices.
* No horizontal scrolling, clipping, or inaccessible content.

---

### 6. Fix YouTube Modals on Mobile

Current Issue:

* YouTube video modals are not rendering correctly on mobile devices.

Requirements:

* Ensure all YouTube modals are responsive.
* Maintain proper aspect ratios.
* Prevent overflow outside the viewport.
* Ensure close buttons remain accessible.
* Verify video playback works correctly in portrait and landscape orientations.

Acceptance Criteria:

* All YouTube modals open and display correctly on mobile.
* Videos remain fully visible and playable.
* No layout breakage occurs.

---

## Mandatory Testing

Test all changes on:

### Portrait

* 320px
* 375px
* 390px
* 414px
* 480px
* 768px

### Landscape

* iPhone landscape sizes
* Android landscape sizes
* Tablet landscape sizes

Verify:

* No broken layouts
* No horizontal scrolling
* No overlapping elements
* No clipped modals
* No inaccessible navigation items
* No responsive regressions
* No console errors

Do not consider the task complete until all issues have been fixed and validated in both portrait and landscape modes.
