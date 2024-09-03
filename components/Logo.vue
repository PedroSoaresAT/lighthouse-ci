<script setup lang="ts">
const props = defineProps<{
  width: number
}>()
</script>

<template>
  <img src="/logo.svg" :width="props.width" alt="Logo do Fatal Model" />
</template>
