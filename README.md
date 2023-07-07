This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## About coding assignment

The coding assignment is done using Next.js, TypeScript and TailwindCSS with Next js static site generation for best SEO results.

The idea is to generate all of the major if not all locations/destinations pages statically on build time for best SEO results. This coding assignment shows what one of the locations page on such page might look like. I am using mock data for statically generated a single page but in full site, this can come from our api, CMS api etc.

We can still have dynamically/client side or hybridly rendered search page for searching offering based on different filters like it is being done currently alongside having statically generated pages where we may not show any filter, show some exluding location filter (because we seeing already a location specific offering/rentals page) or show a cta to navigate user to generic search or rental locator.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
