# Changelog

All notable changes to this starter template. This is not a published package — track manual dependency bumps + scaffold changes here so fork users know when their clone is behind.

Format loosely based on [Keep a Changelog](https://keepachangelog.com/).

## [Unreleased] — 2026-05-06

### Added
- `pages/login.vue` now drops `<OpenApeOAuthErrorAlert />` above the auth form. Shows a friendly UAlert when the IdP redirects back with `?error=...` (RFC 6749 §4.1.2.1) — typical case is `mode=allowlist-admin` denying an unapproved SP. Overrides default copy per-code via `:messages`.

### Changed
- Bumped `@openape/nuxt-auth-sp` from `^0.6.9` to `^0.9.1`.
- `<OpenApeAuth />` form picks up the same friendly OAuth-error mapping internally — even SPs that don't add `<OpenApeOAuthErrorAlert />` will now show a readable message instead of a raw error code.

### Notes
- `@openape/nuxt-auth-sp@0.9.1` brings two new helpers: the composable `useOpenApeOAuthError({ messages? })` returning `{ error, dismiss }` for SPs that want custom error UI, and the `<OpenApeOAuthErrorAlert />` component for drop-in default UX. See `pages/login.vue` for usage.

## 2026-04-16

### Changed
- Bumped `@nuxt/ui` from `^3.0.0` to `^4.5.1` to match the `@openape/nuxt-auth-sp` module's expected peer version.
- Bumped `@openape/nuxt-auth-sp` from `^0.6.8` to `^0.6.9`.

### Notes
- After `pnpm install`, verify `/login`, `/callback`, and `/profile` still render correctly — Nuxt UI v4 is a major version upgrade with potential visual/prop breakage on custom overrides.
