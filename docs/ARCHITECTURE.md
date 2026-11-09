# Orbitfolio architecture

Single-page React app with client-side routing; there is no backend and no API calls.

| Route | Component | Notes |
|---|---|---|
| `/` | `LandingPage` | hero video, nav, `Projects`, `AboutMe`, footer |
| `/games` | `Games` | index of games (currently one) |
| `/game1` | `Game1` | canvas painting with colour and brush size |

- **Scroll effects.** `LandingPage` tracks `window.scrollY` to scale the hero video. `Projects` uses an `IntersectionObserver` to toggle an `animate` class on each card (styles in `index.css`).
- **Cursor.** `MouseEffect` renders a div that follows the pointer and toggles a `hovered` class over links and buttons.
- **Styling.** Tailwind utility classes plus a small amount of custom CSS in `src/index.css`.
- **Tests.** `src/App.test.js` renders `Projects` with a stubbed `IntersectionObserver` and checks that every card links to GitHub.
