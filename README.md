# OpenApe SP Starter

Add DDISA-based login to your Nuxt app in 3 minutes.

## Quick Start

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

Open [http://localhost:3001/login](http://localhost:3001/login) and sign in with your email.

The Free IdP at `id.openape.at` is used by default — no setup needed.

## What's Included

| File | What |
|---|---|
| `pages/login.vue` | Login page with `<OpenApeAuth />` + `<OpenApeOAuthErrorAlert />` for friendly deny-redirect UX |
| `pages/index.vue` | Protected home with `useOpenApeAuth()` |
| `pages/profile.vue` | User profile rendering JWT claims |
| `nuxt.config.ts` | `@openape/nuxt-auth-sp` module + minimal config |
| `.env.example` | Env-var reference |

## OAuth Error Handling

When the IdP rejects an authorize request (per RFC 6749 §4.1.2.1) it redirects back to the SP with `?error=<code>` in the URL. Without dedicated handling the user lands on the login page with mysterious URL params they don't understand.

This starter ships two complementary surfaces:

**`<OpenApeAuth />`** (the form on `/login`) — its built-in error display already maps known codes to friendly copy. Nothing to do.

**`<OpenApeOAuthErrorAlert />`** — drop it above the auth form for a richer banner with dismiss-X, optional product-specific overrides:

```vue
<OpenApeOAuthErrorAlert
  :messages="{
    access_denied: 'Custom copy for your product...',
    invalid_request: 'Try again or contact support...',
  }"
/>
```

For custom error UI (different layout, modal, toast), use the composable directly:

```ts
const { error, dismiss } = useOpenApeOAuthError()
// `error` is null | { code, description, message }; `dismiss()` strips ?error from URL.
```

Default copy covers all the common RFC 6749 codes (`access_denied`, `consent_required`, `login_required`, `invalid_request`, …) — override only what you need.

## Configuration

Copy `.env.example` to `.env` to customize. The most common knobs:

| Var | Default | Purpose |
|---|---|---|
| `NUXT_OPENAPE_SP_FALLBACK_IDP_URL` | `https://id.openape.at` | Used when the user's `_ddisa.{domain}` TXT record is missing |
| `NUXT_OPENAPE_SP_NAME` | `My App` | Display name on the IdP login page |
| `NUXT_OPENAPE_CLIENT_ID` | (origin) | Defaults to dev origin; set explicitly in production |

## Next Steps

- [Connect your own domain with DNS](https://docs.openape.at/getting-started/quickstart-sp#next-steps) — set up `_ddisa.{your-domain}` so users from your domain land on your IdP
- [Set up your own Identity Provider](https://docs.openape.at/getting-started/quickstart-idp) — fork the IdP starter
- [How DDISA works](https://docs.openape.at/getting-started/how-it-works)
- [`@openape/nuxt-auth-sp` reference](https://docs.openape.at/reference/nuxt-auth-sp)

## License

MIT — see [LICENSE](./LICENSE).
