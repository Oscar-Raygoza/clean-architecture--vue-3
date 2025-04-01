<template>
  <div>
    <p class="dark:text-neutral-dark-lighter text-neutral-dark-dark text-sm">{{ props.label }}</p>
    <div class="flex items-center gap-2 mt-1">
      <span>{{ props.value }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface StatItemDetailProps {
  label: string
  value: string
}

const props = withDefaults(defineProps<StatItemDetailProps>(), {})
</script>
