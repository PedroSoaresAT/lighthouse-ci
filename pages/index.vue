<script setup lang="ts">
const appStore = useAppStore()
await useAsyncData(() => appStore.fetchPanicServiceStatus())
</script>

<template>
  <section class="flex flex-col gap-8 min-h-screen items-center justify-center">
    <h1 class="font-medium">PROJECT_NAME</h1>

    <Logo :width="200" />

    <details>
      <summary class="font-medium">Panic controls ativos</summary>
      <ul class="text-xs">
        <li v-for="panic in appStore.panicControl" :key="panic">{{ panic }}</li>
      </ul>
    </details>
  </section>
</template>
