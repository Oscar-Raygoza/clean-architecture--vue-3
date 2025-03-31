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

    <!-- TODO: Refactor to new component Cards Not Found -->
    <section
      v-if="!isLoading && !cards.length"
      class="flex justify-center items-center flex-col mt-15"
    >
      <img src="/src/app/assets/static/gifs/pokemon.gif" alt="No cards found" class="w-1/2 block" />

      <TCGTitle
        variant="secondary"
        class="!text-default-dark dark:!text-default-light !text-xl !font-semibold mt-5"
      >
        <TCGIcon
          name="alert"
          class="h-4 w-4 text-neutral-dark dark:text-default-light inline mx-2 mb-1"
        />
        Cards not found, try another search
      </TCGTitle>
    </section>

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
import TCGIcon from '@/app/components/Shared/TCGIcons/TCGIcon.vue'
import TCGTitle from '@/app/components/Shared/TCGTitle/TCGTitle.vue'

// router
import { useRoute, useRouter } from 'vue-router'

// components
import Search from '@/app/components/Card/Forms/Search.vue'
import DrawerFiltersCards from '@/app/components/Card/Filters/DrawerFiltersCards.vue'

// stores
import { useCardStore } from '../stores/Card/CardStore'
import type Card from '@/domain/card/entities/Card'
import TCGPagination from '../components/Shared/TCGPagination/TCGPagination.vue'

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
