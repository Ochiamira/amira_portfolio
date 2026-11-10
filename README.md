# Portfolio professionnel

Portfolio moderne et responsive construit avec Next.js, TypeScript et Tailwind CSS.

## Démarrage rapide

Prérequis : Node.js 20.9 ou plus récent.

```bash
npm install
npm run dev
```

Ouvrez ensuite [http://localhost:3000](http://localhost:3000).

## Personnaliser le contenu

Le contenu initial se trouve dans un seul fichier :

```text
data/portfolio.ts
```

Vous pouvez y modifier :

- le nom, le métier, la biographie et les coordonnées ;
- les liens LinkedIn et GitHub ;
- les compétences et les langues ;
- les expériences et les formations ;
- les projets et leurs études de cas ;
- les certifications.

Une fois l'administration configurée, utilisez `/admin` pour modifier ces informations et les textes des sections sans toucher au code. Le contenu enregistré dans Supabase prend le relais du contenu initial.

### Ajouter une photo

1. Placez la photo dans `public/images/profile/`, par exemple `photo.webp`.
2. Dans `data/portfolio.ts`, remplacez :

```ts
photo: "",
```

par :

```ts
photo: "/images/profile/photo.webp",
```

Une image WebP verticale d'environ 800 × 1000 px est recommandée.

### Ajouter les captures de projets

1. Placez les captures dans `public/images/projects/`.
2. Modifiez la propriété `image` du projet concerné :

```ts
image: "/images/projects/nom-du-projet.webp",
```

### Ajouter le CV

Placez votre PDF dans `public/cv/votre-cv.pdf`, ou changez le chemin `cv` dans `data/portfolio.ts`.

## Activer le formulaire de contact

Copiez `.env.example` vers `.env.local`, puis renseignez :

```env
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_EMAIL=votre.email@example.com
CONTACT_FROM_EMAIL=Portfolio <contact@votre-domaine.com>
```

Le domaine utilisé pour `CONTACT_FROM_EMAIL` doit être vérifié dans Resend. Sans ces variables, l'interface fonctionne mais aucun e-mail n'est envoyé.

## Administration du contenu

L'adresse `/admin` n'apparaît pas dans la navigation et n'est pas indexée. Elle est protégée par un mot de passe et une session temporaire. Les modifications sont enregistrées dans Supabase pour rester disponibles après publication ou redéploiement.

1. Créez un projet Supabase.
2. Dans son éditeur SQL, exécutez [database/portfolio-content.sql](database/portfolio-content.sql). Cela crée la table du contenu et le bucket public destiné aux images et au CV.
3. Dans Supabase, copiez l'URL du projet et une **secret key** (`sb_secret_...`). Gardez cette clé uniquement dans les variables du serveur.
4. Lancez `npm run admin:credentials` pour générer un mot de passe fort et une clé de session. Copiez les quatre valeurs dans `.env.local` :

```env
SUPABASE_URL=https://votre-projet.supabase.co
SUPABASE_SECRET_KEY=sb_secret_...
ADMIN_PASSWORD=...
ADMIN_SESSION_SECRET=...
```

5. Relancez `npm run dev`, puis ouvrez `http://localhost:3000/admin`. Sur le site publié, ajoutez les mêmes quatre variables à l'hébergeur et ouvrez `https://votre-domaine/admin`.

Le contenu actuel sert de point de départ tant qu'aucune modification n'a été enregistrée. Dans l'administration, vous pouvez modifier le profil, les textes des sections, les liens, les chiffres, les compétences, les expériences, la formation, les projets, les certifications et les langues. Les images JPEG, PNG, WebP ou AVIF et les PDF jusqu'à 3 Mo peuvent être importés directement. Après un import, cliquez sur **Enregistrer** pour publier la nouvelle adresse du fichier.

Le mot de passe et la secret key ne doivent jamais être ajoutés au dépôt ni préfixés par `NEXT_PUBLIC_`. Les fichiers déjà présents dans `public/` restent utilisables. Retirer une image de la page ne supprime pas automatiquement le fichier de Supabase Storage.

## Vérifications

```bash
npm run lint
npm run typecheck
npm run build
```

## Mise en ligne

1. Créez un dépôt GitHub et poussez le projet.
2. Importez ce dépôt dans Vercel.
3. Ajoutez les variables d'environnement.
4. Connectez votre nom de domaine.
5. Définissez `NEXT_PUBLIC_SITE_URL` avec l'adresse finale du site.

## Structure principale

```text
app/                    Pages, styles, SEO et API de contact
components/             Sections et composants de l'interface
data/portfolio.ts       Toutes les informations du portfolio
public/cv/              CV au format PDF
public/images/          Photo, projets et certificats
types/                  Types TypeScript
```
