# Jinese Wong — Travel & Outdoor Website

Next.js (App Router) + TypeScript + Tailwind CSS + lucide-react.

## Getting started

Requires Node.js 18.18+ (Node/npm were not available in the environment this
was built in, so `npm install` has not been run yet).

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

- `src/app` — root layout, global styles, and the homepage (`page.tsx`).
- `src/components` — one component per homepage section (Header, Hero, About,
  Categories, LatestPosts, WorkWithMe, Footer, BackToTop, WhatsAppFloat) plus
  `icons.tsx` for the Xiaohongshu/WhatsApp brand marks (not in lucide-react).
- `src/data` — mock content for blog posts and category cards. Swap for a CMS
  or markdown source when ready.
- `src/lib/constants.ts` — social links, WhatsApp number, and nav links in one
  place.

## Notes

- Photos are placeholder Unsplash images (`images.unsplash.com` is whitelisted
  in `next.config.mjs`). Replace with real photography before launch.
- The "Work With Me" form is front-end only — wire `handleSubmit` in
  `WorkWithMe.tsx` up to an email/CRM endpoint when ready.
