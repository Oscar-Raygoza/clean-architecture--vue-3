<script setup lang="ts">
import LeftNavbar from '@/app/components/Shared/Layout/Navbar/LeftNavbar.vue'
</script>
<template>
  <div
    class="flex-1 flex flex-row space-y-5 lg:space-y-0 h-screen lg:space-x-10 sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl"
  >
    <LeftNavbar />
    <div class="flex-1 px-2 sm:px-0">
      <main>
        <slot>
          <router-view />
        </slot>
      </main>
    </div>
  </div>
</template>
