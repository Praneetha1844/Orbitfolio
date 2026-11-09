# Orbitfolio architecture

Single-page React app with client-side routing; there is no backend and no API calls.

| Route | Component | Notes |
|---|---|---|
| `/` | `LandingPage` | hero video, nav, `Projects`, `AboutMe`, footer |
| `/games` | `Games` | index of games (currently one) |
| `/game1` | `Game1` | canvas painting with colour and brush size |

- **Scroll effects.** `LandingPage` tracks `window.scrollY` to scale the hero video. `Projects` uses an `IntersectionObserver` to toggle an `animate` class on each card (styles in `index.css`).
- **Cursor.** `MouseEffect` renders a ring that follows the pointer. It uses event delegation on `document`, so links and buttons on every route get the `hovered` state, and it does nothing when `(pointer: fine)` does not match (touch devices).
- **Fonts.** Loaded from the HTML head. A CSS `@import` placed after `@tailwind` is ignored by browsers, which is why they are not imported in `index.css`. Tailwind classes use `font-heading` and `font-body`; arbitrary font values must use underscores for spaces (`font-['Amatic_SC']`).
- **Paint.** The canvas is 1000 by 500 pixels and is scaled down by CSS on narrow screens, so pointer coordinates are mapped back to canvas pixels. It uses Pointer Events, which cover mouse, pen and touch. Clear repaints white.
- **Styling.** Tailwind utility classes plus a small amount of custom CSS in `src/index.css`.
- **Reduced motion.** The hero video does not autoplay or zoom, smooth scrolling is replaced by instant scrolling, and project cards are shown without animation.
- **Tests.** Jest and Testing Library, in `src/*.test.js`: project links and headings (including a guard against the pre-rename repository names), the cursor and the games index.
