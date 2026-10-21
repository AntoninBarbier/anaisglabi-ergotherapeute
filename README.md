# Anaïs Glabi-Mus – Ergothérapeute et consultante en lactation IBCLC

Site vitrine d'Anaïs Glabi-Mus, ergothérapeute et consultante en lactation IBCLC à Lyon et Champagne-au-Mont-d'Or.

En ligne : **https://ergotherapeute-lyon.fr**

## Stack

- [Next.js 16](https://nextjs.org/) (App Router) et React 19
- Tailwind CSS 3 + Sass
- [Prismic](https://prismic.io/) pour tout le contenu (textes, images, prix)
- Google Maps JavaScript API (cartes des cabinets)
- Hébergement [Netlify](https://www.netlify.com/), domaine géré chez Hostinger

## Démarrer en local

Prérequis : Node.js 22 (voir `.nvmrc`, `nvm use`).

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

**Tout le contenu se modifie dans Prismic**, dépôt `anaisglabi-ergotherapeute`, document **« Page d'accueil »** : un onglet par section (Accueil, Ergothérapie, IBCLC, Pour qui, Qui suis-je, Rendez-vous, Honoraires, SEO). Une fois le document **publié**, le site se met à jour tout seul (webhook Prismic → `/api/revalidate`, et au plus tard une minute après si le webhook échoue).

Le bouton **Aperçu** de Prismic affiche les modifications non publiées sur le vrai site (`/api/preview`), uniquement dans le navigateur qui fait l'aperçu (cookies). Pour revoir le site publié dans ce navigateur, fermer l'aperçu avec la croix de la barre d'outils Prismic (ou utiliser une fenêtre privée).

Reste dans le code :

| Élément | Fichier |
|---|---|
| Les liens du menu | `src/app/components/Navigation/index.jsx` (menus desktop et mobile) |
| Les icônes décoratives | `public/images/icones/` |
| Les couleurs et la mise en page | `tailwind.config.ts`, `src/app/globals.scss`, composants |

### Modifier le modèle Prismic

Le modèle est versionné dans `customtypes/homepage/index.json`. Pour ajouter ou modifier un champ :

```bash
npm run slicemachine   # puis http://localhost:9999 → modifier → Push
```

`prismicio-types.d.ts` est régénéré par Slice Machine.

### Variables d'environnement

| Variable | Où | Rôle |
|---|---|---|
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | `.env.local`, Netlify | Cartes |
| `PRISMIC_WEBHOOK_SECRET` | Netlify | Secret partagé avec le webhook Prismic (*Settings → Webhooks*) |

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

## Migration initiale

`scripts/prismic-migrate-homepage.mjs` a recopié le contenu historique du site dans Prismic (octobre 2026). Il refuse de s'exécuter si une page d'accueil est déjà publiée.
