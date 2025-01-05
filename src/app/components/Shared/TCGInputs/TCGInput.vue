<template>
  <div class="w-full space-y-2">
    <div class="relative">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      </div>

      <!-- Input -->
      <input
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        placeholder="Search for a card..."
        class="pl-10 pr-10 w-full bg-transparent border-neutral-light-lighter appearance-none border-b-2 py-4 px-3 text-neutral-dark leading-tight focus:border-brand-primary-light dark:focus:border-brand-primary-dark focus:outline-none"
      />

      <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
        <svg
          @click="toggleFilter"
          class="h-4 w-4 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'

// Props
const props = defineProps<{
  modelValue: string
}>()

// Emits
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'filter'): void
}>()

// Methods
const toggleFilter = () => {
  emit('filter')
}
</script>
