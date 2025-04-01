## Local development and preview

1. `npm install`
2. `npm run dev`

The application should be available at `http://localhost:5173`

## Overview and notes

- Simple Image Gallery web application with infinite scroll using Pexels API.
- Tech stack: React, TypeScript, Vite, CSS modules.
- Minimal Custom UI components used as minimal design system components library.
- For favorites feature I've used localStorage instead of react context to avoid rerendering large list of images
  but current solution doesn't sync data between windows and if flawed in multiple ways.
- Setup for SSR is in place, to preload initial page view with fallbacks, but not implemented yet as well as lazy loading.
- Haven't used Vite before, not sure why critical CSS is not preloaded, issue is visible in dev mode.

## Future improvements / TODO:

- Cross browser testing and compatibility.
- Add tests.
- Add responsive design.
- Code consistency improvements.
- Fix and improve UI components library
