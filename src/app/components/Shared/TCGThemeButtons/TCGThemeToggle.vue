<template>
  <button
    type="button"
    aria-label="Toggle dark mode"
    class="rounded-lg p-2 transition-colors duration-200 hover:bg-brand-primary-light-lighter dark:hover:bg-gray-700"
    @click="toggleTheme"
  >
    <TCGIcon :key="icon" :name="icon" class="inline-block text-default-dark cursor-pointer dark:text-accent-light" :size="12" />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue"

import TCGIcon from "@/app/components/Shared/TCGIcons/TCGIcon.vue"

import { useTheme } from '@/app/composables/useTheme'
import type { IconType } from "@/app/components/Shared/TCGIcons/types/IconType";
const { isDark, toggleTheme } = useTheme()

const icon = computed<IconType>(() => isDark.value ? 'sun' : 'moon');

</script>
