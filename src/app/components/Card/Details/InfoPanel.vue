<template>
  <div class="dark:bg-slate-800 bg-default-light-lighter  rounded-xl p-4">
    <h3 class="text-lg font-semibold mb-3">{{ props.title }}</h3>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
export interface InfoPanelCardDetailsProps {
  title: string
}

const props = withDefaults(defineProps<InfoPanelCardDetailsProps>(), {})
</script>
