<template>
  <div class="relative">
    <button
      @click="toggleDropdown"
      type="button"
      class="inline-flex items-center gap-x-2 px-3 py-4 rounded-lg p-2 text-sm ring-gray-300 hover:bg-brand-primary-light-lighter dark:hover:bg-gray-700"
      :aria-expanded="isOpen"
    >
      <component
        :is="props.icon"
        class="h-5 w-5 text-default-dark cursor-pointer dark:text-accent-light"
        aria-hidden="true"
      />
      <span v-if="text" class="text-default-dark text-md font-semibold cursor-pointer dark:text-default-light">{{
        props.text
      }}</span>
      <div class="text-default-dark dark:text-default-light">
        <TCGIcon :class="{ 'rotate-180': isOpen }" :size="20" name="arrow-down" />
      </div>
    </button>

    <div
      v-show="isOpen"
      class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      @click="closeDropdown"
    >
      <div class="py-1" role="none">
        <router-link
          v-for="item in props.items"
          :key="item.id"
          :to="item.to"
          class="flex items-center gap-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          <component
            v-if="item.icon"
            :is="item.icon"
            class="h-5 w-5 text-gray-500"
            aria-hidden="true"
          />
          {{ item.text }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Component } from 'vue'
import { onClickOutside } from '@vueuse/core'

import TCGIcon from '@/app/components/Shared/TCGIcons/TCGIcon.vue'

export interface Items {
  id: string | number
  icon?: Component
  text: string
  to: string
}

const props = defineProps<{
  icon: Component
  text: string
  items: Items[]
}>()

const isOpen = ref(false)
const dropdownRef = ref(null)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = () => {
  isOpen.value = false
}

onClickOutside(dropdownRef, closeDropdown)
</script>
