<script setup lang="ts">
import type { IconType } from '@/app/components/Shared/TCGIcons/types/IconType'
import TCGIcon from '@/app/components/Shared/TCGIcons/TCGIcon.vue'

export interface FooterNavIcons {
  id: string // Added id property
  to: string
  name: IconType
}

const socialNetworks: FooterNavIcons[] = [
  {
    id: 'github',
    to: 'https://github.com/Oscar-Raygoza',
    name: 'github',
  },
  {
    id: 'linkedin',
    to: 'https://www.linkedin.com/in/oscar-eduardo-raygoza/',
    name: 'linkedin',
  },
]
</script>

<template>
  <footer class="fixed bottom-0 left-0 w-full bg-default-light dark:text-default-light dark:bg-background-dark-dark z-10">
    <div class="container mx-auto px-4">
      <div class="flex justify-center space-x-4 py-6">
        <a
          v-for="icon in socialNetworks"
          :key="icon.id"
          :href="icon.to"
          class="rounded-xl px-2 pt-2 pb-1 transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-black focus:outline-none  dark:hover:bg-secondary-900"
        >
          <span class="inline-block">
            <TCGIcon :name="icon.name" class="h-5 w-5" />
          </span>
        </a>
      </div>

      <div class="border-t border-black/10 dark:border-white/10 py-4 text-center">
        <span class="text-sm">
          © {{ new Date().getFullYear() }} Copyright:
          <router-link to="#" class="hover:text-primary-500 transition-colors duration-200">
            Oscar Raygoza
          </router-link>
        </span>
      </div>
    </div>
  </footer>
</template>
