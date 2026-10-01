# Repository hosting

Development starts at [repos.openape.ai/patrick/sp-starter](https://repos.openape.ai/patrick/sp-starter). Push branches and tags to the canonical repository:

```sh
git remote set-url origin https://repos.openape.ai/patrick/sp-starter.git
git remote set-url --push origin https://repos.openape.ai/patrick/sp-starter.git
git push origin HEAD
```

The automatic mirror chain is:

1. https://repos.openape.ai/patrick/sp-starter.git
2. https://git.openape.ai/openape-ai/sp-starter.git
3. https://github.com/openape-ai/sp-starter.git

Forgejo forwards commit pushes to GitHub and performs a periodic reconciliation every ten minutes. Pure branch deletions may wait for that periodic reconciliation because Forgejo 15 does not trigger its commit notifier for them. Treat both downstream repositories as read-only mirrors for development.

Existing GitHub visibility, collaborators, workflows and release assets are retained. Existing CI and deployment providers continue to consume their established refs. Published GitHub recipe and release URLs remain valid. The native forge requires authentication for Git access.

Hosting was migrated and verified on October 1, 2026. Validation compares all branch and tag object IDs and tests propagation from a push made only to the native repository.
