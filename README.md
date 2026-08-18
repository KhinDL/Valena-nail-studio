# Velena Nail Studio

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-umgqbtl5)

A modern, responsive marketing website for **Velena Nail Studio**, a Calgary-based nail salon. Built with Angular and designed to showcase the studio's services, portfolio, and booking information in an elegant, premium layout.

## Features

- **Hero section** — Full-width landing image with a call-to-action to book an appointment.
- **Services** — Overview of manicure, pedicure, and custom nail art offerings.
- **Gallery** — Filterable grid of nail art photos with a lightbox view for enlarged images.
- **About** — Studio background and artist introduction.
- **Booking** — Booking request form with service and date selection.
- **Contact** — Location, hours, and contact details with social links.
- **Footer** — Quick links and Instagram follow link.

## Tech Stack

- [Angular](https://angular.dev/) (standalone components, signals)
- TypeScript
- Bootstrap 5 (utility classes)
- SCSS / global CSS

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install and run locally

```bash
npm install
npm start
```

The dev server runs at `http://localhost:4200`.

### Build for production

```bash
npm run build
```

Output is generated in `dist/demo/browser`.

## Deployment

This project is configured for **Netlify** via `netlify.toml`:

- **Build command:** `npx ng build`
- **Publish directory:** `dist/demo/browser`

To deploy:

1. Push the repository to GitHub.
2. In Netlify, choose **Add new site → Import an existing project**.
3. Select the GitHub repository.
4. Netlify will detect the settings automatically from `netlify.toml` and deploy.

A manual deploy is also possible: build locally and drag the `dist/demo/browser` folder into the Netlify dashboard.

## Project Structure

```
src/
├── app.component.ts          # Root component composing all sections
├── main.ts                   # Bootstrap entry
├── index.html                # HTML shell
├── global_styles.css         # Theme, layout, and component styles
└── components/
    ├── navbar.component.ts
    ├── hero.component.ts
    ├── services.component.ts
    ├── gallery.component.ts
    ├── about.component.ts
    ├── booking.component.ts
    ├── contact.component.ts
    └── footer.component.ts
```

## License

All content and images are property of Velena Nail Studio. Code is provided for the studio's use.
