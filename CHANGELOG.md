# Changelog

All notable changes to this starter template. This is not a published package — track manual dependency bumps here so fork users know when their clone is behind.

Format loosely based on [Keep a Changelog](https://keepachangelog.com/).

## [Unreleased] — 2026-04-16

### Changed
- Bumped `@nuxt/ui` from `^3.0.0` to `^4.5.1` to match the `@openape/nuxt-auth-sp` module's expected peer version.
- Bumped `@openape/nuxt-auth-sp` from `^0.6.8` to `^0.6.9`.

### Notes
- `@openape/nuxt-auth-sp@0.6.9` is a maintenance release aligned with `@openape/auth@0.6.0`. Grant-claim parsing and delegation detection are unchanged.
- After `pnpm install`, verify `/login`, `/callback`, and `/profile` still render correctly — Nuxt UI v4 is a major version upgrade with potential visual/prop breakage on custom overrides.
