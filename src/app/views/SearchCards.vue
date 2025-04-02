<template>
  <div class="flex justify-center items-center pt-4 sm:pt-10 flex-col px-4 sm:px-6 md:px-8">
    <!-- Barra de búsqueda -->
    <div class="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
      <Search
        :value="route.query.name as string"
        @open-filters="toggleFilters"
        @on-search="handlerSearch($event)"
      />
      <DrawerFiltersCards :show="showFilters" @close="toggleFilters" />
    </div>

    <!-- Esqueletos de carga -->
    <section v-if="isLoading" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8 sm:mt-15 w-full">
      <CardSkeleton v-for="(_, position) in 10" :key="position" />
    </section>

    <!-- Mensaje de no encontrado -->
    <CardsNotFound v-if="!isLoading && !cards.length" />

    <!-- Grid de tarjetas -->
    <section
      v-if="!isLoading && cards.length"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8 sm:mt-15 w-full"
    >
      <div v-for="card in cards" :key="card.id" class="flex justify-center sm:justify-start">
        <CardItem :card="card" @show-card="goToCardDetailView($event)" />
      </div>
    </section>

    <!-- Paginación -->
    <section class="mt-6 sm:mt-10 mb-10" v-if="!isLoading && cards.length">
      <TCGPagination
        :current-page="pagination._currentPage"
        :total-pages="pagination._totalPages"
        :max-visible-pages="isMobile ? 5 : 12"
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
const windowWidth = ref(window.innerWidth)

// Detectar si estamos en un dispositivo móvil
const isMobile = computed(() => windowWidth.value < 640)

onMounted(async () => {
  currentSearch.value = route.query.name as string

  await searchCards()

  // Añadir listener para cambios de tamaño de ventana
  window.addEventListener('resize', handleResize)
})

// Limpiar el event listener cuando el componente se desmonta
function onUnmounted() {
  window.removeEventListener('resize', handleResize)
}

function handleResize() {
  windowWidth.value = window.innerWidth
}

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
