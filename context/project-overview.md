# Netaji Youth Foundation — Next.js Build Brief

> Complete technical + content + design brief for a production-ready Next.js website. Includes Prisma ORM with Supabase PostgreSQL and Nodemailer SMTP. No third-party paid form services.

---

## 1. Project Summary

### Project Overview

Build a clean, modern, mobile-friendly **Next.js website** for **Netaji Youth Foundation**, a nonprofit initiative serving rural children in Tamil Nadu, India.

The foundation starts in **Vedaranyam, Nagai district** and focuses on developing children through:

- Physical fitness and sports
- Chess and mental growth
- Education support
- Leadership and discipline
- Nutrition and health awareness
- Equal opportunity for girls

This is a **nonprofit-only initiative**. All programs are **free for children**.

The website should feel:

- Professional
- Trustworthy
- Mission-driven
- Warm and inspiring
- Rooted in rural India
- Suitable for parents, community leaders, trainers, and future donors/CSR audiences

---

### Brand Positioning

#### Organization Name
**Netaji Youth Foundation**

#### Tagline Options
Use one primary tagline and optionally rotate others in secondary sections.

**Primary tagline:**
**Building Strong Minds, Strong Bodies, Strong Futures**

**Alternate supporting lines:**
- Transforming Rural Children Through Mind, Body & Leadership
- Strong Children, Strong Villages, Strong Future
- Discipline. Strength. Leadership.

#### Mission Statement
Netaji Youth Foundation is committed to empowering rural children in Tamil Nadu through free programs that develop physical strength, mental sharpness, discipline, confidence, and leadership.

#### Vision Statement
To build a generation of confident, healthy, disciplined, and capable rural youth who can lead their families, communities, and future with strength and purpose.

---

### Target Audience

The website should speak to these audiences:

1. **Parents**
   - Want safe, structured, meaningful programs for their children
   - Want visible progress and discipline

2. **Children / Students**
   - Need an inspiring and welcoming environment

3. **Trainers / Teachers**
   - Need to understand the mission and apply to work with the foundation

4. **Community members**
   - Need confidence in the credibility and seriousness of the effort

5. **Future CSR / donor audiences**
   - Not asking for donations online right now, but site should still build trust and credibility

---

### Website Goals

The static website should achieve the following:

- Establish trust and credibility
- Explain the mission clearly
- Tell the founder story in a powerful way
- Show the programs and impact areas
- Allow parents to express interest / register children
- Allow trainers to apply
- Show updates, photos, and progress stories
- Present Netaji Youth Foundation as a professionally run rural youth development institution

---

## 2. Tech Stack

| Layer | Tool | Notes |
|-------|------|-------|
| Framework | **Next.js 14+** (App Router) | NOT static export — needs API routes |
| Language | **TypeScript** | Strict mode |
| Styling | **Tailwind CSS v3** | Custom theme tokens |
| Database | **Supabase PostgreSQL** | Hosted Postgres, connected via `DATABASE_URL` |
| ORM | **Prisma** | Schema, `prisma migrate dev`, type-safe queries |
| Email | **Nodemailer** | SMTP transactional emails — no paid services |
| Animation | **Framer Motion** | Scroll reveals, carousel, hover effects |
| Icons | **Lucide React** | Clean line icons |
| Fonts | **Google Fonts** via `next/font` | Anton, Plus Jakarta Sans, DM Sans |

### Prisma Setup
- Define schema in `prisma/schema.prisma` with `provider = "postgresql"`
- Connect to Supabase via `DATABASE_URL` (connection pooler URL from Supabase dashboard)
- Run `npx prisma migrate dev` for migrations
- Use Prisma Client singleton pattern in `lib/prisma.ts`

---

## 3. Design Direction

### Reference
The attached screenshots define the visual language. Key takeaways used throughout:
@context\screenshots\home-page-1.png
@context\screenshots\home-page-2.png
@context\screenshots\home-page-3.png

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `black` | `#111111` | Typography, buttons, dark sections, navbar |
| `white` | `#FFFFFF` | Primary backgrounds, card surfaces |
| `gray-50` | `#F5F5F5` | Alternating section backgrounds |
| `volt` | `#D7F61D` | Accent on dark backgrounds, stat highlights |
| `orange` | `#FF5C00` | Action accents, labels, emphasis words |

### Typography — Three-Font Hierarchy

| Font | Role | Style |
|------|------|-------|
| **Anton** | Hero carousel headlines, stat numbers, "WHAT WE DO" heading | Ultra-condensed, italic, uppercase, massive |
| **Plus Jakarta Sans** (700–800) | Section headings, navbar, footer headings, UI labels | Bold, geometric, uppercase |
| **DM Sans** (400–500) | Body paragraphs, subtitles, form labels | Clean, readable, normal case |

### Core Design Principles
- **Bold editorial / brutalist-athletic aesthetic** — inspired by Nike's typography-forward approach
- **ALL headings uppercase** with period at end (e.g., "OUR PROGRAMS.")
- **Hero = full-bleed image carousel** with text overlay, navigation dots (active = elongated pill), arrow buttons
- **Sharp corners on cards**, pill shape (`rounded-full`) on buttons only
- **High contrast two-tone** — white sections (#111111 text) or dark sections (white/volt text)
- **Generous whitespace** — `py-24 md:py-32 lg:py-40` on sections
- **Image cards with overlay labels** — no icon cards. Top-left semi-transparent tag with category name
- **Centered body text** under headings, `max-w-3xl mx-auto`, lighter gray color (`text-neutral-500`)
- **Underline-only form inputs** — minimal, no full borders on text fields

### Tailwind Config

```js
// tailwind.config.ts
{
  theme: {
    extend: {
      colors: {
        black: '#111111',
        white: '#FFFFFF',
        gray: { 50: '#F5F5F5', 100: '#E8E8E8', 200: '#D4D4D4' },
        volt: '#D7F61D',
        orange: '#FF5C00',
      },
      fontFamily: {
        hero: ['Anton', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
}
```

---

## 4. Site Structure

```
/                     → Home
/about                → About Us
/founder-story        → Founder Story
/programs             → Programs
/register             → Parent Registration
/impact               → Impact & Updates
/become-a-trainer     → Become a Trainer
/contact              → Contact

/api/register         → POST: Save to DB + send emails
/api/trainer          → POST: Save to DB + send emails
/api/contact          → POST: Save to DB + send emails
```

---

## 5. Prisma Schema

> This schema is a starting point and **will evolve**

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model ParentRegistration {
  id                 String   @id @default(cuid())
  parentName         String
  parentEmail        String?
  childName          String
  childAge           Int
  gender             String
  schoolName         String?
  classGrade         String?
  village            String
  parentPhone        String
  alternatePhone     String?
  interestedPrograms String[]
  medicalNotes       String?
  photoPermission    Boolean  @default(false)
  emergencyContact   String?
  additionalNotes    String?
  status             String   @default("pending")
  createdAt          DateTime @default(now())
  updatedAt          DateTime @updatedAt
}

model TrainerApplication {
  id                 String   @id @default(cuid())
  fullName           String
  phone              String
  email              String
  village            String
  expertise          String[]
  childExperience    String?
  languagesKnown     String?
  weeklyAvailability String?
  whyJoin            String?
  status             String   @default("pending")
  createdAt          DateTime @default(now())
  updatedAt          DateTime @updatedAt
}

model ContactMessage {
  id        String   @id @default(cuid())
  name      String
  phone     String?
  email     String
  subject   String
  message   String
  isRead    Boolean  @default(false)
  createdAt DateTime @default(now())
}
```

Run: `npx prisma migrate dev --name init`

---

## 6. API Routes

All three routes follow the same pattern:
1. Validate required fields → return 400 on failure
2. Save to database via Prisma → return 500 on failure
3. Send emails via Nodemailer (log failures but don't break the request)
4. Return `{ success: true, message: "..." }`

### `/api/register` (POST)
- Required: parentName, childName, childAge, gender, village, parentPhone
- Emails: confirmation to parent (if email provided) + notification to admin

### `/api/trainer` (POST)
- Required: fullName, phone, email, village
- Emails: acknowledgment to trainer + notification to admin

### `/api/contact` (POST)
- Required: name, email, subject, message
- Emails: auto-reply to sender + notification to admin

### Email Templates
Clean HTML with inline CSS: org header ("NETAJI YOUTH FOUNDATION"), volt green accent bar, body content, footer with location.

---

## 7. Key Components

### Navbar
- Sticky, white bg, no border/shadow
- Left: **"NETAJI YOUTH"** (font-display, extrabold, uppercase)
- Center: HOME · ABOUT · FOUNDER · PROGRAMS · IMPACT · CONTACT (small uppercase, active = underline bar)
- Right: **"REGISTER"** dark pill button
- Mobile: hamburger → full-screen dark overlay with large links

### Hero Carousel
- Full viewport height, 3 slides with full-bleed background images (dark placeholders for now)
- Dark overlay on images for text readability
- Each slide: massive Anton italic headline + subtitle + "EXPLORE" white pill button
- Slides: "BUILD YOUR BODY." / "TRAIN YOUR MIND." / "LEAD YOUR FUTURE."
- Pagination dots (active = elongated pill) at bottom center
- Arrow nav buttons (outlined circles) at bottom right
- Auto-play 5s, pause on hover, Framer Motion transitions

### Footer
- Dark bg (`#111111`), 4-column grid
- Col 1: "NETAJI YOUTH" + short mission line
- Col 2: "INITIATIVES" links (Sports Programs, Chess Fundamentals, Become a Trainer, Impact)
- Col 3: "ABOUT US" links (Our Mission, Founder Story, Contact)
- Col 4: "REGISTER A CHILD →" white pill + © 2026 copyright

### Other Reusable Components
- **Section** — wrapper with bg variants (white/gray/dark), consistent padding
- **Button** — variants: dark pill, white pill, orange pill, outline-white, text link with arrow
- **ImageCard** — sharp corners, overlay label tag, hover scale effect
- **FormField / FormSelect / FormTextarea / FormCheckbox** — underline inputs, uppercase labels, error/success states
- **FAQAccordion** — click to expand with Framer Motion height animation

---

## 8. Page Content

Full copy and content for all 8 pages is documented in `@context/features/pages-create.md`.

| Page | Route | Key Sections |
|------|-------|-------------|
| Home | `/` | Hero carousel, Why We Exist, Focus Pillars, Girls Participation, Starting Point, Founder Preview, Stats, Closing CTA |
| About | `/about` | Mission, Vision, Values, Our Model, Why It Matters |
| Founder Story | `/founder-story` | Personal narrative from village to CEO, Founder Note |
| Programs | `/programs` | 6 programs: Fitness, Sports, Chess, Education, Leadership, Health & Nutrition |
| Parent Registration | `/register` | What to expect, registration form (14 fields), submit CTA |
| Impact & Updates | `/impact` | Early goals, metrics tracked, story cards, photo/video placeholders |
| Become a Trainer | `/become-a-trainer` | Who we seek, role areas, expectations, application form |
| Contact | `/contact` | Contact info, contact form, map placeholder |

---

## 9. SEO

- Title template: `%s | Netaji Youth Foundation`
- Default title: `Netaji Youth Foundation | Rural Child Development in Tamil Nadu`
- Meta description: *"Netaji Youth Foundation is a nonprofit initiative in Vedaranyam, Tamil Nadu, focused on free programs in fitness, sports, chess, discipline, education support, and leadership for rural children."*
- Per-page titles set via `metadata` export in each page file

---

## 10. File Structure

```
netaji-youth-foundation/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/page.tsx
│   ├── founder-story/page.tsx
│   ├── programs/page.tsx
│   ├── register/page.tsx
│   ├── impact/page.tsx
│   ├── become-a-trainer/page.tsx
│   ├── contact/page.tsx
│   └── api/
│       ├── register/route.ts
│       ├── trainer/route.ts
│       └── contact/route.ts
├── components/
│   ├── Navbar.tsx
│   ├── MobileMenu.tsx
│   ├── Footer.tsx
│   ├── HeroCarousel.tsx
│   ├── Section.tsx
│   ├── Button.tsx
│   ├── ImageCard.tsx
│   ├── ImagePlaceholder.tsx
│   ├── FAQAccordion.tsx
│   ├── FormField.tsx
│   ├── FormSelect.tsx
│   ├── FormTextarea.tsx
│   └── FormCheckbox.tsx
├── lib/
│   ├── prisma.ts
│   ├── email.ts
│   └── email-templates/
│       ├── registration-confirm.ts
│       ├── trainer-acknowledge.ts
│       ├── contact-autoreply.ts
│       └── admin-notification.ts
├── prisma/
│   └── schema.prisma
├── public/
├── .env.example
├── tailwind.config.ts
├── next.config.js
├── package.json
└── tsconfig.json
```

---

## 11. Environment Variables

```env
# .env.example

# Database (Supabase PostgreSQL connection string)
DATABASE_URL="postgresql://postgres.[project-ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.[project-ref]:[password]@aws-0-[region].pooler.supabase.com:5432/postgres"

# SMTP
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="hello@netajiyouthfoundation.org"
SMTP_PASS="your-app-password"
SMTP_FROM="Netaji Youth Foundation <hello@netajiyouthfoundation.org>"

# Admin
ADMIN_EMAIL="admin@netajiyouthfoundation.org"

# App
NEXT_PUBLIC_SITE_URL="https://netajiyouthfoundation.org"
```

> **Note:** Supabase requires both a pooled (`DATABASE_URL` via port 6543) and direct (`DIRECT_URL` via port 5432) connection string. Add `directUrl` to prisma schema datasource block for migrations.

Update Prisma datasource:
```prisma
datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
```

---

## 12. Dependencies

```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.400.0",
    "@prisma/client": "^5.14.0",
    "nodemailer": "^6.9.0"
  },
  "devDependencies": {
    "typescript": "^5.4.0",
    "@types/react": "^18.3.0",
    "@types/node": "^20.0.0",
    "@types/nodemailer": "^6.4.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "prisma": "^5.14.0"
  }
}
```

---

## 13. Lib Utilities

### Prisma Client (`lib/prisma.ts`)
```typescript
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
export const prisma = globalForPrisma.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```

### Email (`lib/email.ts`)
```typescript
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
})

export async function sendEmail({ to, subject, html }: { to: string; subject: string; html: string }) {
  try {
    await transporter.sendMail({ from: process.env.SMTP_FROM, to, subject, html })
    return { success: true }
  } catch (error) {
    console.error('Email send failed:', error)
    return { success: false, error }
  }
}
```

---

## 14. Build Notes

1. **No donations CTA** — do not add donate buttons
2. **"Free"** — emphasize wherever relevant
3. **Girls participation** — first-class theme
4. **Prisma + Supabase PostgreSQL** — use `prisma migrate dev` for schema changes
5. **Email failures don't break submissions** — save to DB first, email second, log failures
6. **Exact copy provided** — do not invent new content
7. **Dark placeholders** for images — `bg-neutral-800` blocks with descriptive text
8. **Three fonts used correctly** — Anton (hero/stats), Plus Jakarta Sans (sections/UI), DM Sans (body)
9. **All headings uppercase with periods**
10. **No third-party paid form services**
11. **Navbar: "NETAJI YOUTH"** (abbreviated), active link underline
12. **Footer: © 2026**, no social icons
13. **Sharp card corners, pill buttons** — only two shape languages

---

## 15. Future Expansion Notes

Design the site so these can be added later without redesigning the brand:

- Parent login
- Trainer login
- Attendance dashboard
- Child progress dashboard
- Gallery
- CSR partnerships
- Multi-village expansion page
- Volunteer/advisor page if needed later
- Mobile app integration

---

## 16. Quality Checklist

- [ ] All 8 pages render
- [ ] Mobile responsive (375px, 768px, 1024px, 1440px)
- [ ] Hero carousel: auto-play, dots, arrows, transitions
- [ ] Navbar: logo left, links center, REGISTER pill right, active underline
- [ ] Footer: 4-column, matches design reference
- [ ] Three fonts load and hierarchy is correct
- [ ] All headings uppercase with periods
- [ ] Forms → API routes → Prisma save → email send
- [ ] Forms show loading/success/error states
- [ ] `prisma migrate dev` runs successfully
- [ ] `.env.example` provided
- [ ] Only 5 brand colors used
- [ ] SEO meta on every page
- [ ] Lighthouse: Performance > 85, Accessibility > 90
