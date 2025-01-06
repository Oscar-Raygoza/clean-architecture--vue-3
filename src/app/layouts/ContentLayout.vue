<!-- src/app/layouts/ContentLayout.vue -->
<script setup lang="ts">
import { RouterView } from 'vue-router'
import SimpleNavbar from '@/app/components/Shared/Layout/Navbar/SimpleNavbar.vue'
</script>

<template>
  <SimpleNavbar />
  <RouterView v-slot="{ Component }">
    <component :is="Component" />
  </RouterView>
</template>
