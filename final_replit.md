# She Politix - Political Operations & Strategy Website

## Overview

She Politix is a static marketing website for a political operations, management, and strategy firm. The site serves as a professional web presence to showcase services, introduce team members, provide voter information, and encourage community engagement. It's built as a multi-page static site using modern frontend tooling with Parcel as the build system.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Static Site with Parcel Bundler**
- The project uses Parcel v2.8.2 as the build tool and development server
- Source files are located in the `src/` directory with `src/index.html` as the entry point
- SCSS is used for styling, compiled via `@parcel/transformer-sass`
- The build outputs to a `dist/` directory for production deployment

**Page Structure**
- Multi-page static site with four main pages:
  - `index.html` - Homepage
  - `meet-dyotha.html` - Team member profile page
  - `get-involved.html` - Community engagement/volunteer page
  - `voter-information.html` - Voter resources page
- Each page shares a consistent header/navigation structure
- Mobile-responsive navigation with hamburger menu toggle

**CSS Framework & Styling**
- Bootstrap 5.2.3 for base styling and grid system
- Custom SCSS styles in `src/styles.scss`
- Font Awesome 6.x for icons (loaded via CDN)

**JavaScript Features**
- ScrollReveal library for scroll-based animations
- VanillaTilt for hover tilt effects on elements
- Custom navigation toggle script for mobile menu
- jQuery included but usage appears minimal

### Build & Development

**Development Server**
- Run with `npm start` - starts Parcel dev server on port 5000, accessible on all network interfaces (0.0.0.0)

**Production Build**
- Run with `npm run build` - creates optimized static files in `dist/` with relative public URLs

### Asset Management

- Static assets stored in `src/assets/` directory
- Includes favicon, logo images, and hero background images
- Images referenced directly in HTML with relative paths

## External Dependencies

### CDN-Loaded Libraries
- **Font Awesome 6.5.0/6.4.0** - Icon library loaded from cdnjs
- **ScrollReveal 4.0.0** - Scroll animation library loaded from unpkg

### NPM Dependencies (Production)
- **Bootstrap 5.2.3** - CSS framework
- **jQuery 3.6.3** - JavaScript utility library
- **Popper.js / @popperjs/core** - Tooltip and popover positioning (Bootstrap dependency)
- **VanillaTilt 1.8.0** - Lightweight tilt hover effect library

### NPM Dependencies (Development)
- **Parcel 2.8.2** - Zero-config build tool and dev server
- **@parcel/transformer-sass** - SCSS compilation for Parcel
- **Prettier 2.8.1** - Code formatting

### External Services
- No backend services, databases, or APIs are used
- No authentication system
- No third-party integrations beyond CDN resources