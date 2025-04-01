<template>
  <div class="flex justify-center items-center pt-10 flex-col">
    <div class="w-[50%]">
      <Search
        :value="route.query.name as string"
        @open-filters="toggleFilters"
        @on-search="handlerSearch($event)"
      />
      <DrawerFiltersCards :show="showFilters" @close="toggleFilters" />
    </div>

    <section v-if="isLoading" class="grid grid-cols-5 gap-4 mt-15">
      <CardSkeleton v-for="(_, position) in 10" :key="position" />
    </section>

    <CardsNotFound v-if="!isLoading && !cards.length" />

    <section v-if="!isLoading && cards.length" class="grid grid-cols-5 gap-4 mt-15">
      <div v-for="card in cards" :key="card.id">
        <CardItem :card="card" @show-card="goToCardDetailView($event)" />
      </div>
    </section>

    <section class="mt-10 mb-10" v-if="!isLoading && cards.length">
      <TCGPagination
        :current-page="pagination._currentPage"
        :total-pages="pagination._totalPages"
        :max-visible-pages="12"
        @update:current-page="searchCards($event)"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

// components
import CardItem from '@/app/components/Card/CardItem.vue'
import CardSkeleton from '@/app/components/Card/Skeleton/CardSkeleton.vue'
import CardsNotFound from '@/app/components/Card/NotFound/CardsNotFound.vue'
import DrawerFiltersCards from '@/app/components/Card/Filters/DrawerFiltersCards.vue'
import TCGPagination from '@/app//components/Shared/TCGPagination/TCGPagination.vue'

// router
import { useRoute, useRouter } from 'vue-router'

// components
import Search from '@/app/components/Card/Forms/Search.vue'

// stores
import { useCardStore } from '../stores/Card/CardStore'
import type Card from '@/domain/card/entities/Card'

const route = useRoute()
const router = useRouter()

const cardsStore = useCardStore()

// state
const showFilters = ref<boolean>(false)
const isLoading = ref<boolean>(false)
const currentSearch = ref<string>('')

onMounted(async () => {
  currentSearch.value = route.query.name as string

  await searchCards()
})

// getters
const cards = computed(() => cardsStore.cards) as unknown as Card[]
const pagination = computed(() => cardsStore.pagination)

// methods
async function handlerSearch(query: string) {
  currentSearch.value = query
  await searchCards()

  router.replace({
    query: {
      ...route.query,
      name: query,
    },
  });
}
async function searchCards(page: number = 1) {
  isLoading.value = true

  cardsStore
    .getCards({
      query: `name:${currentSearch.value}`,
      page,
      size: 15,
    })
    .finally(() => {
      isLoading.value = false
    })
}

function toggleFilters() {
  showFilters.value = !showFilters.value
}

function goToCardDetailView(id: string) {
  router.push({ name: 'CardDetail', params: { id } })
}
</script>
