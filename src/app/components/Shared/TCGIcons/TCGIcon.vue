<script setup lang="ts">
import { computed, useSlots, type SetupContext } from 'vue'

import type { IconType } from './types/IconType'

import { useIcons } from '@/app//composables/useIcon'

const props = defineProps<{
  size?: number
  name?: IconType | string
  src?: string
}>()

const slots: SetupContext['slots'] = useSlots()

const { getIcon } = useIcons()

const iconName = computed<IconType>(() => {
  return (
    (props.name as IconType) ??
    ((slots.default?.()[0].children as string)?.trim().toLowerCase() as IconType)
  )
})

const icon = computed(() => (!props.src ? getIcon(iconName.value) : 'img'))
</script>

<template>
  <component :is="icon" :src="props.src" :width="size ?? 24" height="auto" />
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
