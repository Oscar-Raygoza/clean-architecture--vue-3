<template>
  <span
    class="inline-flex items-center gap-x-1.5 py-1.5 ps-3 pe-2 rounded-sm text-xs font-medium"

  >
    <svg
      v-if="showIcon"
      class="shrink-0 size-3"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
      <path d="m9 12 2 2 4-4"></path>
    </svg>
    {{ label }}
  </span>
</template>

<script setup lang="ts">
interface Props {
  label: string
  variant?: 'blue' | 'green' | 'red' | 'yellow' | 'gray'
  dismissible?: boolean
  showIcon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'blue',
  dismissible: true,
  showIcon: true,
})

const emit = defineEmits<{
  (e: 'dismiss'): void
}>()

const handleDismiss = (): void => {
  emit('dismiss')
}
</script>
