# Anaïs Glabi-Mus – Ergothérapeute et consultante en lactation IBCLC

Site vitrine d'Anaïs Glabi-Mus, ergothérapeute et consultante en lactation IBCLC à Lyon et Champagne-au-Mont-d'Or.

En ligne : **https://ergotherapeute-lyon.fr**

## Stack

- [Next.js 16](https://nextjs.org/) (App Router) et React 19
- Tailwind CSS 3 + Sass
- Google Maps JavaScript API (cartes des cabinets)
- Hébergement [Netlify](https://www.netlify.com/), domaine géré chez Hostinger

## Démarrer en local

Prérequis : Node.js 22 (voir `.nvmrc`).

```bash
npm install
npm run dev
```

Le site est accessible sur http://localhost:3000.

Les cartes ont besoin d'une clé Google Maps dans `.env.local` (non versionné) :

```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=...
```

Autres commandes :

```bash
npm run lint     # ESLint
npm run build    # build de production
npm run start    # sert le build de production
```

## Modifier le contenu

| Je veux changer… | Fichier |
|---|---|
| Les **tarifs**, les **adresses**, le **téléphone**, l'**email**, les liens **Doctolib/Docorga** | `src/app/data/practice.ts` |
| Le **titre** et la **description** pour Google | `src/app/data/practice.ts` (`SITE_TITLE`, `SITE_DESCRIPTION`) |
| Les textes d'une section | `src/app/components/<Section>/index.tsx` |
| Les aides et financements | `src/app/components/Funding/index.tsx` |
| Les liens du menu | `src/app/components/Navigation/index.jsx` (menus desktop et mobile) |
| Les images | `public/images/` |

`src/app/data/practice.ts` est la source unique des infos du cabinet : la page **et** les données structurées lues par Google (JSON-LD) s'en servent, elles restent donc toujours cohérentes.

## SEO

Générés automatiquement par Next.js :

- `/robots.txt` → `src/app/robots.ts`
- `/sitemap.xml` → `src/app/sitemap.ts`
- Image de partage (WhatsApp, Facebook, LinkedIn) → `src/app/opengraph-image.tsx`
- Balises meta, Open Graph et vérification Google Search Console → `src/app/layout.tsx`
- Données structurées (JSON-LD) → `src/app/components/StructuredData/index.tsx`

## Déploiement

Netlify est relié au dépôt GitHub :

- chaque **pull request** génère un **Deploy Preview** (en `noindex` : ignorer le score SEO de Lighthouse sur ces previews, ainsi que la barre d'outils Netlify qui fausse la performance) ;
- chaque **merge sur `main`** est mis en production automatiquement.

## Prismic

Prismic et Slice Machine sont installés mais **pas encore utilisés** : tout le contenu est dans le code. Les routes `src/app/api/*` et `/slice-simulator` en dépendent.
