# Current Feature

Create Remaining Pages

## Status

In Progress

## Goals

Build out the remaining 7 pages of the Netaji Youth Foundation website per the content spec in `context/features/pages-create.md`:

- **About** (`/about`) — Mission, Vision, Values, Our Model, Why It Matters
- **Founder Story** (`/founder-story`) — Personal narrative from village to CEO, Founder Note
- **Programs** (`/programs`) — 6 programs: Fitness, Sports, Chess, Education, Leadership, Health & Nutrition
- **Parent Registration** (`/register`) — What to expect, registration form (14 fields), Submit Registration CTA
- **Impact & Updates** (`/impact`) — Early goals, metrics tracked, story cards, photo/video placeholders
- **Become a Trainer** (`/become-a-trainer`) — Who we seek, role areas, expectations, application form
- **Contact** (`/contact`) — Contact info, contact form, Vedaranyam map

Use the exact copy provided in `context/features/pages-create.md`. Match the editorial design language already established (Anton hero headlines, Plus Jakarta Sans for UI, DM Sans for body, uppercase headings with periods, sharp card corners, pill buttons, brand palette only).

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
- Marked Nav, Footer & Homepage feature as completed
- Kicked off "Create Remaining Pages" feature — building out the remaining 7 content pages from `context/features/pages-create.md`
- Created branch `feature/remaining-pages`
- Built shared `PageHero` component (dark editorial header for sub-pages) and form primitives: `FormField`, `FormSelect`, `FormTextarea`, `FormCheckbox`, `FormCheckboxGroup`
- Built `/about` — Mission/Vision/Values cards, Our Model section with image stack and numbered points, "Why This Model Matters" closing CTA
- Built `/founder-story` — sticky image rail + 7-paragraph narrative (drop-cap on first paragraph), 6-step milestone strip, framed Founder Note with quote
- Built `/programs` — 6 alternating program rows (Fitness, Sports, Chess, Education, Leadership, Health) each with image, icon, focus areas; Schedule section with weekday/weekend cards
- Built `/register` — sidebar with "What to Expect" + 14-field registration form (parent/child details, programs checkbox group, medical/additional notes, photo permission), success state on submit
- Built `/impact` — early goals stat grid, "What We Measure" list, 6 story/update cards, photo + video placeholder panels
- Built `/become-a-trainer` — "Who we're looking for" grid, role areas + expectations split (volt/black), 9-field application form with success state
- Built `/contact` — 4 contact info cards (location/email/phone/timing), contact form with success state, embedded Vedaranyam Google Map
- Verified `npm run build` passes (all 11 routes prerender, no TS or lint errors)
