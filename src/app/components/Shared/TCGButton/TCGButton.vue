<template>
  <button
    class="rounded-md"
    :class="[
      'btn',
      `btn-${props.color}`,
      `btn-${props.variant}`,
      `btn-${props.shape}`,
      `btn-${props.size || 'lg'}`,
      {
        'block w-full': props.block,
        'btn-disabled': props.disabled,
        'btn-text': props.text,
        'btn-wide': props.wide,
        'no-animation': !props.animation,
        glass: props.glass,
        uppercase: props.uppercase,
      },
    ]"
  >
    <span v-if="loading" class="loading loading-spinner mt-1" />
    <slot v-else />
  </button>
</template>

<script setup lang="ts">
interface Props {
  ariaLabel?: string
  block?: boolean
  color?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
  disabled?: boolean
  shape?: 'square' | 'circle'
  text?: boolean
  uppercase?: boolean
  variant?: 'default' | 'soft' | 'outline' | 'gradient'
  size?: 'xs' | 'lg' | 'sm'
  loading?: boolean
  wide?: boolean
  glass?: boolean
  animation?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  shape: 'square',
  color: 'primary',
  variant: 'default',
  size: 'lg',
  uppercase: true,
  block: false,
})
</script>
