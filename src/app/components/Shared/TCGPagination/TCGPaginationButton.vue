<template>
  <button
    class="px-3 py-2 rounded-md text-sm transition-all"
    :class="{
      'bg-brand-primary-light dark:bg-brand-primary-dark text-default-light dark:text-default-dark': props.active,
      'hover:bg-neutral-light-lighter hover:dark:text-default-dark': !props.active && !props.disabled,
      'bg-gray-300 cursor-not-allowed': props.disabled,
    }"
    :disabled="props.disabled"
    @click="$emit('click')"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  label: string
  active?: boolean
  disabled?: boolean
}>()
</script>

<style scoped>
button:disabled {
  opacity: 0.5;
}
</style>
