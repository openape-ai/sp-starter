<template>
  <div class="flex min-h-screen items-center justify-center p-4">
    <div class="w-full max-w-md space-y-4">
      <!--
        Drop-in friendly banner for OAuth deny redirects (RFC 6749
        §4.1.2.1). The IdP sends users back here with `?error=…`
        when an authorize is rejected (e.g. the user's domain runs
        `mode=allowlist-admin` and this SP isn't on the list). The
        component reads the URL params, maps the code to friendly
        copy, and shows a UAlert. Override per-code copy via
        `:messages` for product-specific guidance.
      -->
      <OpenApeOAuthErrorAlert
        :messages="{
          access_denied: 'Login wurde vom Identity Provider abgelehnt. Wahrscheinlich hat dein Domain-Admin diese App noch nicht freigegeben — frag deinen Admin oder verwende eine andere Email-Adresse.',
        }"
      />

      <UCard>
        <OpenApeAuth
          title="Sign in"
          subtitle="Enter your email to continue"
          button-text="Continue"
        />
      </UCard>
    </div>
  </div>
</template>
