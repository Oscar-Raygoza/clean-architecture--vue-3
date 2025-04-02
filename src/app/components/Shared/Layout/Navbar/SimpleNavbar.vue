<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import TCGIcon from '@/app/components/Shared/TCGIcons/TCGIcon.vue'
import TCGLangToggle from '@/app/components/Shared/TCGLangButtons/TCGLangToggle.vue'
import TCGMenuProjects from '@/app/components/Shared/Layout/Navbar/Menu/Projects.vue'
import TCGThemeToggle from '@/app/components/Shared/TCGThemeButtons/TCGThemeToggle.vue'
import TCGTitle from '@/app/components/Shared/TCGTitle/TCGTitle.vue'

import Blue from '@/app/assets/static/icons/blue.png'
import Charizard from '@/app/assets/static/icons/charizard(geneticapex).png'
import Eevee from '@/app/assets/static/icons/eevee.png'
import Electrode from '@/app/assets/static/icons/electrode.png'
import Erika from '@/app/assets/static/icons/erika.png'
import Gardevoir from '@/app/assets/static/icons/gardevoir.png'
import Giovanni from '@/app/assets/static/icons/giovanni.png'
import Meowth from '@/app/assets/static/icons/meowth.png'
import Mew from '@/app/assets/static/icons/mew.png'
import Mewtwo from '@/app/assets/static/icons/mewtwo.png'
import MewtwoGeneticApex from '@/app/assets/static/icons/mewtwo(geneticapex).png'
import Pikachu from '@/app/assets/static/icons/pikachu.png'
import PikachuGeneticApex from '@/app/assets/static/icons/pikachu(geneticapex).png'
import Slowpoke from '@/app/assets/static/icons/slowpoke.png'
import Snorlax from '@/app/assets/static/icons/snorlax.png'
import Venusaur from '@/app/assets/static/icons/venusaur.png'

export interface NavItems {
  title: string
  to: string
}

const nav: NavItems[] = []

const icons = [
  Blue,
  Charizard,
  Eevee,
  Electrode,
  Erika,
  Gardevoir,
  Giovanni,
  Meowth,
  Mew,
  Mewtwo,
  MewtwoGeneticApex,
  Pikachu,
  PikachuGeneticApex,
  Slowpoke,
  Snorlax,
  Venusaur,
]

const selectedIcon = ref<string>()
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

onMounted(() => {
  const savedIcon = sessionStorage.getItem('selectedIcon')

  if (savedIcon) {
    selectedIcon.value = savedIcon
  } else {
    const randomIcon = icons[Math.floor(Math.random() * icons.length)]
    selectedIcon.value = randomIcon
    sessionStorage.setItem('selectedIcon', randomIcon)
  }
})

const icon = computed(() => selectedIcon.value)
</script>
<template>
  <div class="bg-background-ligth dark:bg-background-dark">
    <nav class="container mx-auto px-5 py-3">
      <div class="flex justify-between items-center">
        <!-- Logo y título siempre visible -->
        <div>
          <router-link to="/" class="flex items-center space-x-3">
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
        </div>

        <!-- Menú de escritorio -->
        <div class="hidden md:flex items-center space-x-5">
          <TCGMenuProjects />
          <template v-for="(link, key) in nav" :key="key">
            <router-link
              :to="link.to"
              class="text-neutral-dark dark:text-default-light dark:text-blackink link-underline link-underline-black hover:text-default-dark text font-semibold py-1 px-3 underline-offset-4 transition duration-30"
            >
              {{ link.title }}
            </router-link>
          </template>
          <TCGLangToggle />
          <TCGThemeToggle />
        </div>

        <!-- Botón de menú móvil -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden text-neutral-dark dark:text-default-light focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              v-if="!mobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      <!-- Menú móvil desplegable -->
      <div
        :class="mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'"
        class="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div class="pt-2 pb-3 space-y-1 border-t border-gray-700 mt-3">
          <div class="py-2">
            <TCGMenuProjects />
          </div>
          <template v-for="(link, key) in nav" :key="key">
            <router-link
              :to="link.to"
              class="block text-neutral-dark dark:text-default-light py-2 px-4 font-medium"
              @click="mobileMenuOpen = false"
            >
              {{ link.title }}
            </router-link>
          </template>
          <div class="flex space-x-4  py-2">
            <TCGLangToggle />
          </div>
          <div class="flex space-x-1 py-2">
            <TCGThemeToggle /> <span class="py-2 font-semibold ">Mode</span>
          </div>
        </div>
      </div>
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
