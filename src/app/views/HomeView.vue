<template>
  <section id="main-search-page" class="main-search-page">
    <div class="flex justify-center items-center pt-24 flex-col">
      <TCGTitle
        variant="primary"
        class="from-gradient-light-from to-gradient-light-to dark:from-gradient-dark-from dark:to-gradient-dark-to bg-gradient-radial-light dark:bg-gradient-radial-dark gradient-text"
      >
        Pokémon TCG Poket</TCGTitle
      >
      <TCGTitle variant="secondary" component="h2"> {{ t('mainSubtitle') }}</TCGTitle>
    </div>

    <div class="flex justify-center items-center pt-10 flex-col">
      <SearchCards @open-filters="toggleFilters" @on-search="handlerSearch($event)" />
      <DrawerFiltersCards :show="showFilters" @close="toggleFilters" />
      <p class="text-sm text-neutral-light mt-5">
        {{ t('searchHelper') }}
      </p>
    </div>
    <section id="container-random-cards" class="relative w-full max-w-4xl mx-auto my-20">
      <div
        v-for="(card, position) in cards"
        :key="card.id"
        :style="cardPositions[position]"
        class="card-wrapper transition-all duration-300 ease-out absolute"
      >
        <CardItem :card="card" />
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { onMounted, computed, ref, reactive } from 'vue'

// router
import { useRouter } from 'vue-router'
const router = useRouter()

// components
import CardItem from '@/app/components/Card/CardItem.vue'
import DrawerFiltersCards from '@/app/components/Card/Filters/DrawerFiltersCards.vue'
import SearchCards from '@/app/components/Card/Forms/SearchCards.vue'
import TCGTitle from '@/app/components/Shared/TCGTitle/TCGTitle.vue'

// i18n
import { useLocale } from '@/app/composables/locale/useLocale'
import messages from '@/app/locales/views/Home/HomeView.lang'
const { t } = useLocale(messages)

// stores
import { useCardStore } from '../stores/Card/CardStore'
import type Card from '@/domain/card/entities/Card'

const cardsStore = useCardStore()

onMounted(async () => {
  if (!cardsStore.isHydrated) cardsStore.hydrate()

  if (!cardsStore.randomCards.length) await cardsStore.getRandomCards()

  cardsStore.randomCards.forEach((_, position) => {
    cardPositions[position] = getCardPosition(position)
  })
})

// state
const showFilters = ref<boolean>(false)
const cardPositions = reactive<Record<number, { top: string; left: string; transform: string }>>([])

// getters
const cards = computed(() => cardsStore.randomCards) as unknown as Card[]

// methods
function handlerSearch(query: string) {
  router.push({ name: 'Search', query: { q: query } })
}

function getCardPosition(position: number) {
  const offsetX = 200
  const offsetY = 20
  const rotation = (Math.random() - 0.5) * 15

  return {
    top: `${position * offsetY}px`,
    left: `${position * offsetX}px`,
    transform: `rotate(${rotation}deg)`,
  }
}

function toggleFilters() {
  showFilters.value = !showFilters.value
}
</script>

<style scoped>
.card-wrapper {
  transform-style: preserve-3d;
  will-change: transform;
  z-index: 1;
}

.card-wrapper:hover {
  transform: translateY(-50px) translateX(-60px) scale(1.1) !important;
  filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
  z-index: 2;
}

#container-random-cards > div {
  transition: all 0.4s cubic-bezier(0.5, 0, 0.2, 1);
}

#container-random-cards {
  z-index: 1;
}
</style>
