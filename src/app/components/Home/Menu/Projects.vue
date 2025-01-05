<template>
  <TCGDropdownMenu :icon="ProjectIcon" text="Project" :items="project" />
</template>

<script setup lang="ts">
import TCGDropdownMenu from '@/app/components/Shared/TCGDropdownMenu/TCGDropdownMenu.vue'

import { useIcons } from '@/app/composables/useIcon'

const { getIcon } = useIcons()

const ProjectIcon = getIcon('projects')!

const project = [
  { id: 1, text: 'TCG Color System', to: '/colors' },
  { id: 2, text: 'TCG Architecture', to: '/search' },
]
</script>
