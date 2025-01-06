<script setup lang="ts">
import { RouterView } from 'vue-router'

import SimpleNavbar from '@/app/components/Shared/Layout/Navbar/SimpleNavbar.vue'
import Footer from '@/app/components/Shared/Layout/Footer/Footer.vue'
</script>

<template>
  <SimpleNavbar />
  <section>
    <RouterView v-slot="{ Component }">
        <component :is="Component" />
    </RouterView>
  </section>
  <Footer />
</template>
