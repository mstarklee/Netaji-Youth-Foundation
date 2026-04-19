# Current Feature

Nav, Footer & Homepage

## Status

Completed

## Goals

Build the Navbar, Footer, and Homepage (`/`) per the design spec in `context/features/nav-footer-homepage.md`:

- **Navbar**: Sticky white, logo left, nav links center, REGISTER pill right, mobile hamburger overlay
- **Hero Carousel**: Full-viewport 3-slide carousel (Anton italic headlines), dots + arrow nav, Framer Motion, auto-play 5s
- **Homepage sections**: Why We Exist, What We Focus On (5 pillars), Girls Participation, Our Starting Point, Founder Message Preview, Quick Stats, Closing CTA
- **Footer**: Dark bg `#111111`, 4-column grid

## Notes

<!-- Any extra notes -->

## History

<!-- Keep this updated. Earliest to latest -->

- Project setup and boilerplate cleanup
- Initial setup of Next.js with Tailwind CSS v4
- Installed dependencies: framer-motion, lucide-react; wired Anton, Plus Jakarta Sans, and DM Sans via `next/font`
- Added brand tokens in `globals.css` (black, white, volt, orange, gray scale) and custom utilities (grain, floaty, marquee)
- Built Navbar: sticky white bg, logo left, center nav links with active underline, REGISTER pill right, mobile hamburger overlay
- Built Footer: dark `#111111` bg, 4-column grid (org + mission, Initiatives, About Us, Register CTA)
- Built shared components: `Section`, `Button`, `StickerBadge`, `Reveal`, `MarqueeBar`, `CounterNumber`, `VoltHighlight`
- Built Hero Carousel: initial 3-slide full-bleed version, later redesigned to clean editorial split-panel with 2 slides (image contained in volt/orange accent tile, Anton italic headlines, dots + paired arrow controls, auto-play 6s)
- Built Homepage sections: Why We Exist (tilted image stack), What We Focus On (PillarShowcase — bento grid with `public/images/focus/*` images), Girls Participation (split panel using `women/empowerment.png`), Our Starting Point (Google Maps embed for Vedaranyam at 10.392436, 79.848738), Founder Message preview, Quick Stats counter row, Closing CTA split
- Removed diagonal stripe backgrounds from banner sections for a cleaner look
- Marked feature as completed
