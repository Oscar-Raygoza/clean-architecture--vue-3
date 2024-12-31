<template>
  <button
    type="button"
    aria-label="Toggle dark mode"
    class="rounded-lg p-2 transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
    @click="toggleTheme"
  >
    <TCGIcon :name="icon" class="inline-block text-white cursor-pointer" :size="22" />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue"

import TCGIcon from "@/app/components/Shared/TCGIcons/TCGIcon.vue"

import { useTheme } from '@/app/composables/useTheme'
const { isDark, toggleTheme } = useTheme()

const icon = computed(() => isDark ? 'dark-mode' : 'dark-mode' )
</script>
