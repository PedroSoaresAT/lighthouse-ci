<script setup lang="ts">
const config = useRuntimeConfig()
const analytics = useAnalytics()

onMounted(() => {
  if (config.public.gaEnable) {
    analytics.bootstrap('Guest')
    analytics.initializeEventCaller()
  }
})
</script>

<template>
  <main class="bg-gray-100">
    <slot />
  </main>
</template>
