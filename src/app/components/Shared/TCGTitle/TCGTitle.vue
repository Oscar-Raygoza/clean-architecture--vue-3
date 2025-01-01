<template>
  <h1 :class="[classesByVariants, classesByPropsValues]">
    <slot />
  </h1>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type VariantType = 'primary' | 'secondary'

interface Props {
  variant?: VariantType
  uppercase?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  uppercase: false,
})

const classesByVariants = computed(() => {
  const classes: Record<VariantType, string> = {
    primary: 'text-4xl font-bold text-brand-primary dark:text-white inline-block',
    secondary: '!text-lg !font-normal !font-sans text-brand-primary dark:text-white inline-block',
  }

  return classes[props.variant!]
})

const classesByPropsValues = computed(() => {
  return {
    uppercase: props.uppercase,
  }
})
</script>
