<template>
  <TCGDropdownMenu :icon="ProjectIcon" :text="t('project')" :items="project" />
</template>

<script setup lang="ts">
import { computed } from 'vue'

// components
import TCGDropdownMenu from '@/app/components/Shared/TCGDropdownMenu/TCGDropdownMenu.vue'

// icons
import { useIcons } from '@/app/composables/useIcon'
const { getIcon } = useIcons()

const ProjectIcon = getIcon('projects')!

// i18n
import { useLocale } from '@/app/composables/locale/useLocale'
import messages from '@/app/locales/views/Home/components/Project.lang'
const { t } = useLocale(messages)

const project = computed(() => [
  { id: 1, text: t('colorDesign'), to: '/colors' },
  { id: 2, text: t('architecture'), to: 'https://medium.com/@oscar.eduardo.raygoza/implementando-clean-architecture-en-el-frontend-una-experiencia-pr%C3%A1ctica-68d1dab575eb' },
])
</script>
