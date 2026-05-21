# Belgrade Live Cameras

Grid of 21 live JPEG feeds from [stream.uzivobeograd.rs](https://stream.uzivobeograd.rs/live/), refreshed every 0.5s.

## Deploy to Vercel

1. Push this repo to GitHub (or GitLab / Bitbucket).
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Leave build settings as defaults (no build command, output is the repo root).
4. Deploy.

Or with the CLI:

```bash
npx vercel
```

## Local preview

```bash
python3 -m http.server 8080
```

Open http://localhost:8080
