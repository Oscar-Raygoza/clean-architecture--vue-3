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
    id: 'twitter',
    to: '/test',
    name: 'x',
  },
  {
    id: 'facebook',
    to: '/#facebook',
    name: 'facebook',
  },
  {
    id: 'github',
    to: '/#github',
    name: 'github',
  },
  {
    id: 'linkedin',
    to: '/#linkedin',
    name: 'linkedin',
  },
]
</script>

<template>
  <footer class="fixed bottom-0 left-0 w-full bg-default-light dark:text-default-light dark:bg-background-dark-dark z-10">
    <div class="container mx-auto px-4">
      <div class="flex justify-center space-x-4 py-6">
        <router-link
          v-for="icon in socialNetworks"
          :key="icon.id"
          :to="icon.to"
          class="rounded-full p-3 transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-black focus:outline-none focus:ring-0 dark:hover:bg-secondary-900"
        >
          <span class="inline-block">
            <TCGIcon :name="icon.name" class="h-5 w-5" />
          </span>
        </router-link>
      </div>

      <div class="border-t border-black/10 dark:border-white/10 py-4 text-center">
        <span class="text-sm">
          © {{ new Date().getFullYear() }} Copyright:
          <router-link to="#profile" class="hover:text-primary-500 transition-colors duration-200">
            Oscar Raygoza
          </router-link>
        </span>
      </div>
    </div>
  </footer>
</template>
