# ILGCS Astro Rebuild

Static Astro rebuild for the ILGCS bath remodeling lead-generation site.

## Stack

- Astro static output
- TypeScript
- Custom CSS design tokens matching the existing ILGCS visual system
- Netlify-compatible static forms
- Playwright smoke tests
- LocalBusiness, Service, and FAQ schema

## Commands

```bash
npm install
npm run dev
npm run build
npx playwright test --reporter=line
```

## Main Routes

- `/bath/`
- `/bathroom-remodeling/[town]/`
- `/walk-in-showers/[town]/`
- `/lp/bath-remodel-offer/`
- `/lp/walk-in-shower-discount/`
- `/thank-you/`

The town routes are generated from `src/data/site.ts`.

## Forms And CRM

Forms are static and marked up for Netlify Forms. To use another provider later, replace the `action`/provider attributes in:

- `src/components/ui/LeadForm.astro`
- `src/components/sections/EstimateWizard.astro`

The form components are intentionally isolated so the leads can later be routed through Zapier, Make, Formspree, Basin, or a CRM webhook.

## SEO Notes

Core SEO data, service areas, FAQ content, schema helpers, and image references live in `src/data/site.ts`. Ad landing pages are currently `noindex` to avoid duplicate thin campaign pages competing with organic SEO pages.
