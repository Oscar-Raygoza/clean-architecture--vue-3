<template>
  <div class="flex justify-center items-center pt-10 flex-col">
    <SearchCards @open-filters="toggleFilters" @on-search="handlerSearch($event)" />
    <DrawerFiltersCards :show="showFilters" @close="toggleFilters" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// router
import { useRouter } from 'vue-router'
const router = useRouter()

// components
import SearchCards from '@/app/components/Card/Forms/SearchCards.vue'
import DrawerFiltersCards from '@/app/components/Card/Filters/DrawerFiltersCards.vue'

// state
const showFilters = ref<boolean>(false)

// methods
function handlerSearch(query: string) {
  router.push({ name: 'Search', query: { q: query } })
}

function toggleFilters() {
  showFilters.value = !showFilters.value
}
</script>
