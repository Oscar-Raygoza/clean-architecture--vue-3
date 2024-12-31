<script setup lang="ts">
import TCGIcon from '@/app/components/Shared/TCGIcons/TCGIcon.vue'
import TCGThemeToggle from '@/app/components/Shared/TCGThemeButtons/TCGThemeToggle.vue'
</script>
<template>
  <div class="bg-[linear-gradient(90deg,#224459,#1A202C)]">
    <nav class="flex container mx-auto px-5 py-3">
      <ul class="flex flex-grow space-x-4">
        <li>
          <a href="/" class="flex items-center space-x-3 text-gray-700 md:mr-5">
            <span class="text-neutral-white-light hover:text-gray-300 text-xl align-center font-semibold">
              <TCGIcon name="main-logo" class="inline-block mr-2" size="28" /> Pokémon TCG
            </span>
          </a>
        </li>
      </ul>
      <ul class="flex items-center space-x-5">
        <li class="hidden sm:flex">
          <router-link to="/" class="text-gray-200 hover:text-gray-400 text font-semibold py-1 px-3"
            >Search</router-link
          >
        </li>
        <li class="hidden sm:flex">
          <router-link
            to="/about"
            class="text-gray-200 hover:text-gray-400 text font-semibold py-1 px-3"
            >About</router-link
          >
        </li>
        <li class="hidden sm:flex">
          <TCGThemeToggle/>
        </li>
      </ul>
    </nav>
  </div>
</template>
