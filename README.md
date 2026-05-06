# OpenApe SP Starter

Add DDISA-based login to your Nuxt app in 3 minutes.

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3001/login](http://localhost:3001/login) and sign in with your email.

The Free IdP at `id.openape.at` is used by default — no setup needed.

## What's Included

- `pages/login.vue` — Login page with `<OpenApeAuth />` component
- `pages/index.vue` — Protected home page
- `pages/profile.vue` — User profile with JWT claims

## Configuration

Copy `.env.example` to `.env` to customize settings.

## Next Steps

- [Connect your own domain with DNS](https://docs.openape.at/getting-started/quickstart-sp#next-steps)
- [Set up your own Identity Provider](https://docs.openape.at/getting-started/quickstart-idp)
- [How DDISA works](https://docs.openape.at/getting-started/how-it-works)
