<template>
  <div class="flex min-h-screen items-center justify-center">
    <UCard class="w-full max-w-md">
      <template #header>
        <h2 class="text-lg font-semibold">Welcome</h2>
      </template>

      <div v-if="loading" class="flex justify-center py-8">
        <UIcon name="i-lucide-loader-circle" class="animate-spin text-2xl" />
      </div>

      <div v-else-if="user" class="space-y-4">
        <p>Logged in as <strong>{{ user.sub }}</strong></p>
        <UButton to="/profile" block>View Profile</UButton>
        <UButton color="neutral" variant="outline" block @click="logout">Logout</UButton>
      </div>

      <div v-else class="space-y-4">
        <p>You need to sign in to access this page.</p>
        <UButton to="/login" block>Sign in</UButton>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const { user, loading, fetchUser, logout } = useOpenApeAuth()

onMounted(() => {
  fetchUser()
})
</script>
