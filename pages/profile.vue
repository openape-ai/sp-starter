<template>
  <div class="flex min-h-screen items-center justify-center">
    <UCard class="w-full max-w-md">
      <template #header>
        <div class="flex items-center justify-between">
          <h2 class="text-lg font-semibold">Profile</h2>
          <UButton size="sm" color="neutral" variant="ghost" to="/">Back</UButton>
        </div>
      </template>

      <div v-if="loading" class="flex justify-center py-8">
        <UIcon name="i-lucide-loader-circle" class="animate-spin text-2xl" />
      </div>

      <div v-else-if="user" class="space-y-3">
        <div>
          <p class="text-sm text-gray-500">Email</p>
          <p class="font-medium">{{ user.sub }}</p>
        </div>
        <div>
          <p class="text-sm text-gray-500">Issuer</p>
          <p class="font-medium">{{ user.iss }}</p>
        </div>
        <div>
          <p class="text-sm text-gray-500">Actor Type</p>
          <p class="font-medium">{{ user.act || 'human' }}</p>
        </div>

        <UDivider />

        <details>
          <summary class="cursor-pointer text-sm text-gray-500">Raw JWT Claims</summary>
          <pre class="mt-2 overflow-auto rounded bg-gray-50 p-3 text-xs dark:bg-gray-900">{{ JSON.stringify(user, null, 2) }}</pre>
        </details>
      </div>

      <div v-else class="space-y-4">
        <p>Not authenticated.</p>
        <UButton to="/login" block>Sign in</UButton>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const { user, loading, fetchUser } = useOpenApeAuth()

onMounted(() => {
  fetchUser()
})
</script>
