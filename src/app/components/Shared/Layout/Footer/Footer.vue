<script setup lang="ts">
import type { IconType } from '@/app/components/Shared/TCGIcons/types/IconType'
import TCGIcon from '@/app/components/Shared/TCGIcons/TCGIcon.vue'

export interface FooterNavIcons {
  to: string
  name: IconType
}

const socialNetworks: FooterNavIcons[] = [
  {
    to: '/test',
    name: 'x',
  },
  {
    to: '/#facebook',
    name: 'facebook',
  },
  {
    to: '/#github',
    name: 'github',
  },
  {
    to: '/#linkedin',
    name: 'linkedin',
  },
]
</script>

<template>
  <footer
    class="flex flex-col absolute bottom-0 left-0 w-full items-center bg-neutral-dark text-center text-surface dark:text-white"
  >
    <div class="container pt-9 mb-6 flex justify-center space-x-2">
      <div v-for="icon in socialNetworks" :key="icon.id">
        <router-linka
          :to="icon.to"
          class="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-black focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
          data-twe-ripple-init
        >
          <span class="[&>svg]:h-5 [&>svg]:w-5 inline-block">
            <TCGIcon :name="icon.name" class="inline-block" />
          </span>
        </router-linka>
      </div>
    </div>

    <div class="w-full bg-black/5 p-4 text-center">
      © 2025 Copyright:
      <router-link to="#profile">Oscar Raygoza</router-link>
    </div>
  </footer>
</template>
