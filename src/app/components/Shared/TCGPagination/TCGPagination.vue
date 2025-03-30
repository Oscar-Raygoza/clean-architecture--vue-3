<template>
  <div class="flex space-x-2 justify-center mt-4">
    <TCGPaginationButton
      label="Prev"
      :disabled="isFirstPage"
      @click="changePage(currentPage - 1)"
    />

    <template v-for="(page, index) in pages" :key="index">
      <TCGPaginationButton
        v-if="typeof page === 'number'"
        :label="String(page)"
        :active="currentPage === page"
        @click="changePage(page)"
      />
      <span v-else class="px-2">{{ page }}</span>
    </template>

    <TCGPaginationButton label="Next" :disabled="isLastPage" @click="changePage(currentPage + 1)" />
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue'
import TCGPaginationButton from './TCGPaginationButton.vue'

const props = defineProps<{
  currentPage: number
  totalPages: number
  maxVisiblePages?: number
}>()

const emit = defineEmits<{ 'update:currentPage': [number] }>()
const maxVisiblePages = props.maxVisiblePages ?? 5

const isFirstPage = computed(() => props.currentPage === 1)
const isLastPage = computed(() => props.currentPage === props.totalPages)

const pages = computed(() => {
  if (props.totalPages <= maxVisiblePages) {
    return Array.from({ length: props.totalPages }, (_, i) => i + 1)
  }

  const visiblePages: (number | string)[] = []
  if (props.currentPage > 2) visiblePages.push(1)
  if (props.currentPage > 3) visiblePages.push('...')

  const start = Math.max(2, props.currentPage - 1)
  const end = Math.min(props.totalPages - 1, props.currentPage + 1)

  for (let i = start; i <= end; i++) {
    visiblePages.push(i)
  }

  if (props.currentPage < props.totalPages - 2) visiblePages.push('...')
  if (props.currentPage < props.totalPages - 1) visiblePages.push(props.totalPages)

  return visiblePages
})

const changePage = (page: number | string) => {
  if (typeof page === 'number' && page !== props.currentPage) {
    emit('update:currentPage', page)
  }
}
</script>

<style scoped>
span {
  opacity: 0.7;
}
</style>
