<script setup lang="ts">
import { computed, useSlots, type SetupContext } from 'vue'

import type { IconType } from './types/IconType'

import { useIcons } from '@/app//composables/useIcon'

const props = defineProps<{
  size?: number
  name?: IconType
}>()

const slots: SetupContext['slots'] = useSlots()

const { getIcon } = useIcons()

const iconName = computed<IconType>(() => {
  return props.name ?? ((slots.default?.()[0].children as string)?.trim().toLowerCase() as IconType)
})

const icon = computed(() => getIcon(iconName.value))
</script>

<template>
  <component :is="icon" :width="size ?? 24" :height="size ?? 24"/>
</template>

<style scoped>
.icon {
  display: block;
  .stroke {
    stroke: inherit;
  }
  .fill {
    fill: inherit;
  }
}
</style>
