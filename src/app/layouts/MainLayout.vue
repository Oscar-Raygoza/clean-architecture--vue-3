<script setup lang="ts">
import SimpleNavbar from '@/app/components/Shared/Layout/Navbar/SimpleNavbar.vue'
import Footer from '@/app/components/Shared/Layout/Footer/Footer.vue'
</script>
<template>
  <div class="layout-container">
    <SimpleNavbar />
    <main>
      <slot>
        <router-view />
      </slot>
    </main>
    <Footer />
  </div>
</template>
