# Portfolio

Jonathan McDonald's personal portfolio website, built with React, Vite, and Tailwind CSS. It is a static, browser-rendered app; there is no backend server to start or database to configure.

## Returning to this repository

- **Production hosting is Firebase Hosting.**
- **Pushing to `master` deploys production automatically.** Work on a branch and open a pull request to preview changes first.
- **Firebase project:** `project-05a98a90-abdf-43c6-996`. Open the [Firebase Hosting console](https://console.firebase.google.com/project/project-05a98a90-abdf-43c6-996/hosting) to find the site's live URLs, connected domains, and release history.
- **Deployment status:** Check [GitHub Actions](https://github.com/jlmcd/portfolio/actions) after merging. A local build does not publish the site.

## Run locally

Use Node.js and npm. No environment variables or Firebase login are needed for local development.

```bash
npm ci
npm run dev
```

Open the URL printed by Vite, normally [http://localhost:5173](http://localhost:5173).

To check the production build locally:

```bash
npm run build
npm run preview
```

Open the URL printed by the preview server. Vite writes the static site to `dist/client`; generated files in `dist/` are ignored by Git.

## Where to make changes

| Location | Purpose |
| --- | --- |
| `src/App.jsx` | Page composition and section order |
| `src/components/` | Header, hero, about, skills, experience, and footer content |
| `src/index.css`, `tailwind.config.js` | Styling and Tailwind configuration |
| `src/assets/` | Images, logos, and fonts imported by components |
| `public/` | Static files such as favicons and the social preview image |
| `index.html` | HTML entry point and page metadata |

## How production deployment works

1. Push a branch and open a pull request. For branches in this repository, the [PR workflow](.github/workflows/firebase-hosting-pull-request.yml) builds the app and creates a Firebase preview deployment. Fork PRs are skipped.
2. Review the preview and merge into `master`.
3. The [production workflow](.github/workflows/firebase-hosting-merge.yml) runs `npm ci` and `npm run build`, then publishes to Firebase Hosting's `live` channel.
4. Check the workflow result and the live site to confirm the release.

The workflow authenticates using the repository's GitHub Actions secret `FIREBASE_SERVICE_ACCOUNT_PROJECT_05A98A90_ABDF_43C6_996`. Routine deployments do not require a local Firebase CLI or login. If deployment authentication fails, check that secret and the service account's access to the Firebase project.

The hosting configuration lives in:

- [`.firebaserc`](.firebaserc): default Firebase project.
- [`firebase.json`](firebase.json): serves `dist/client` and rewrites routes to `/index.html` so direct navigation works.
- [`vite.config.js`](vite.config.js): build output paths.

## Other hosting-related files

The repository also contains OpenAI Sites metadata in `.openai/hosting.json` and an asset-serving worker in `worker/index.js`. The Vite build copies that worker to `dist/server/index.js` for the Sites output format. The Firebase workflow publishes only `dist/client`, so it does not deploy this worker.

These files indicate an additional hosting integration; the confirmed production deployment history above is for Firebase Hosting.
