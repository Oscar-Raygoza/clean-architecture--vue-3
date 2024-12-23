<script setup lang="ts">
import TCGIcon from '@/app/components/Shared/TCGIcons/TCGIcon.vue'
</script>
<template>
  <div class="bg-brand-primary">
    <nav class="flex container mx-auto px-5 py-3">
      <ul class="flex flex-grow space-x-4">
        <li>
          <a href="/" class="flex items-center space-x-3 text-gray-700 md:mr-5">
            <span class="text-gray-200 hover:text-gray-300 text-2xl font-semibold py-1">
              <TCGIcon name="x" class="inline-block mr-2" size="28" /> Pokémon TCG
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
          <TCGIcon name="dark-mode" class="inline-block text-white cursor-pointer" size="22" />
        </li>
      </ul>
    </nav>
  </div>
</template>
