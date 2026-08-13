# David Ebula — Portfolio

A React portfolio site built for internship and graduate applications, styled as a
technical "blueprint" — grid backdrop, schematic hero diagram, and annotation-style tags.

## Run locally
```
npm install
npm run dev
```

## Build for production
```
npm run build
```
This outputs a static `dist/` folder you can host anywhere.

## Deploy for free

**Option A — GitHub Pages (matches your existing davidMumpasa.github.io)**
1. Run `npm run build`
2. Push the contents of `dist/` to your `davidMumpasa.github.io` repo (or a `gh-pages` branch)
3. Enable GitHub Pages in the repo settings, pointing at that branch/folder

**Option B — Vercel (fastest)**
1. Push this folder to a new GitHub repo
2. Go to vercel.com → New Project → import the repo
3. Framework preset: Vite. Click Deploy — you'll have a live URL in under a minute

**Option C — Netlify**
1. Run `npm run build`
2. Drag the `dist/` folder into netlify.com/drop

## Editing content
All the text, skills, experience, and project data lives in plain arrays near the
top of `src/App.jsx` — update those directly, no need to touch the layout code.
