<script setup lang="ts">
import { computed } from 'vue'

import TCGIcon from '@/app/components/Shared/TCGIcons/TCGIcon.vue'
import TCGLangToggle from '@/app/components/Shared/TCGLangButtons/TCGLangToggle.vue'
import TCGMenuProjects from '@/app/components/Shared/Layout/Navbar/Menu/Projects.vue'
import TCGThemeToggle from '@/app/components/Shared/TCGThemeButtons/TCGThemeToggle.vue'
import TCGTitle from '@/app/components/Shared/TCGTitle/TCGTitle.vue'

export interface NavItems {
  title: string
  to: string
}

const nav: NavItems[] = [

]

const icons = [
  'blue.png',
  'charizard(geneticapex).png',
  'eevee.png',
  'electrode.png',
  'erika.png',
  'gardevoir.png',
  'giovanni.png',
  'meowth.png',
  'mew.png',
  'mewtwo.png',
  'mewtwo(geneticapex).png',
  'pikachu.png',
  'pikachu(geneticapex).png',
  'slowpoke.png',
  'snorlax.png',
  'venusaur.png',
]

const icon = computed(
  () => `/src/app/assets/static/icons/${icons[Math.floor(Math.random() * icons.length)]}`,
)
</script>
<template>
  <div class="bg-background-ligth dark:bg-background-dark">
    <nav class="flex container mx-auto px-5 py-3">
      <ul class="flex flex-grow space-x-4">
        <li>
          <router-link to="/" class="flex items-center space-x-3 md:mr-5">
            <span class="hover:text-gray-300 text-xl align-center font-semibold">
              <TCGIcon
                :src="icon"
                class="inline-block mr-2 border-2 rounded-full border-neutral-dark dark:border-brand-primary-light"
                :size="42"
              />
              <TCGTitle
                variant="primary"
                class="!text-default-dark dark:!text-default-light font-medium !text-xl items-center text-center mt-1"
              >
                TCG Poket
              </TCGTitle>
            </span>
          </router-link>
        </li>
      </ul>
      <ul class="flex items-center space-x-5">
        <li class="hidden sm:flex">
          <TCGMenuProjects />
        </li>
        <li class="hidden sm:flex" v-for="(link, key) in nav" :key="key">
          <router-link
            :to="link.to"
            class="text-neutral-dark dark:text-default-light dark:text-blackink link-underline link-underline-black hover:text-default-dark text font-semibold py-1 px-3 underline-offset-4 transition duration-30"
            >{{ link.title }}</router-link
          >
        </li>
        <li class="hidden sm:flex">
          <TCGLangToggle />
        </li>
        <li class="hidden sm:flex">
          <TCGThemeToggle />
        </li>
      </ul>
    </nav>
  </div>
</template>

<style>
.link-underline {
  border-bottom-width: 0;
  background-size: 0 2px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.5s ease-in-out;
}

.link-underline-black {
  background-image: linear-gradient(transparent, transparent), linear-gradient(#3b82f6, #facc15);
}

.link-underline:hover {
  background-size: 100% 2px;
  background-position: 0 100%;
}
</style>
