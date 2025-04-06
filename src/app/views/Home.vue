<template>
  <section id="main-search-page" class="main-search-page px-4">
    <div class="flex justify-center items-center pt-12 md:pt-24 flex-col">
      <TCGTitle
        variant="primary"
        class="from-gradient-light-from to-gradient-light-to dark:from-gradient-dark-from dark:to-gradient-dark-to bg-gradient-radial-light dark:bg-gradient-radial-dark gradient-text text-center"
      >
        Pokémon TCG Poket</TCGTitle
      >
      <TCGTitle variant="secondary" component="h2" class="text-center">
        {{ t('mainSubtitle') }}</TCGTitle
      >
    </div>

    <div class="flex justify-center items-center pt-6 md:pt-10 flex-cols">
      <div class="w-full md:w-[70%] lg:w-[50%]">
        <Search value="" @open-filters="toggleFilters" @on-search="handlerSearch($event)" />
        <DrawerFiltersCards :show="showFilters" @close="toggleFilters" />
      </div>
    </div>
    <div class="flex justify-center items-center flex-cols">
      <p class="text-sm text-neutral-light mt-5 text-center px-2">
        {{ t('searchHelper') }}
      </p>
    </div>

    <!-- Vista de escritorio: cartas con posición absoluta -->
    <section
      id="container-random-cards"
      class="relative w-full max-w-4xl mx-auto my-10 md:my-20 hidden md:block"
      style="height: 500px"
    >
      <div
        v-for="(card, position) in cards"
        :key="card.id"
        :style="cardPositions[position]"
        class="card-wrapper transition-all duration-300 ease-out absolute"
      >
        <CardItem :card="card" @show-card="goToCardDetailView($event)" />
      </div>
    </section>

    <!-- Vista móvil: cartas en grid -->
    <section class="md:hidden w-full max-w-4xl mx-auto my-10">
      <div class="grid grid-cols-2 gap-4">
        <div
          v-for="card in cards"
          :key="card.id"
          class="card-wrapper-mobile transform transition-all duration-300 hover:scale-105"
        >
          <CardItem :card="card" @show-card="goToCardDetailView($event)" />
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { onMounted, computed, ref, reactive, type Ref } from 'vue'
import { useHead } from '@vueuse/head'

// constants
import constants from '@/infrastructure/config/constants'

// router
import { useRouter } from 'vue-router'
const router = useRouter()

// components
import CardItem from '@/app/components/Card/CardItem.vue'
import DrawerFiltersCards from '@/app/components/Card/Filters/DrawerFiltersCards.vue'
import Search from '@/app/components/Card/Forms/Search.vue'
import TCGTitle from '@/app/components/Shared/TCGTitle/TCGTitle.vue'

// i18n
import { useLocale } from '@/app/composables/locale/useLocale'
import messages from '@/app/locales/views/Home/HomeView.lang'
const { t } = useLocale(messages)

// stores
import { useCardStore } from '../stores/Card/CardStore'
import type Card from '@/domain/card/entities/Card'

const cardsStore = useCardStore()
const windowWidth = ref(window.innerWidth)

onMounted(async () => {
  if (!cardsStore.isHydrated) cardsStore.hydrate()

  if (!cardsStore.randomCards.length) await cardsStore.getRandomCards()

  updateCardPositions()

  // Actualizar posiciones cuando cambia el tamaño de ventana
  window.addEventListener('resize', handleResize)
})

// SEO
useHead({
  title: 'TCG Pocket - Rastreador de Cartas Coleccionables',
  meta: constants.META_PAGE!,
})

// Limpiar event listener cuando el componente se desmonta
function onUnmounted() {
  window.removeEventListener('resize', handleResize)
}

function handleResize() {
  windowWidth.value = window.innerWidth
  updateCardPositions()
}

// state
const showFilters = ref<boolean>(false)
const cardPositions = reactive<Record<number, { top: string; left: string; transform: string }>>([])

// getters
const cards = computed(() => cardsStore.randomCards) as unknown as Ref<Card[]>

// methods
function handlerSearch(query: string) {
  router.push({ name: 'SearchCards', query: { name: query } })
}

function updateCardPositions() {
  const containerWidth = Math.min(window.innerWidth - 40, 1200)

  cards.value.forEach((_, position) => {
    cardPositions[position] = getCardPosition(position, containerWidth)
  })
}

function getCardPosition(position: number, containerWidth: number) {
  // Cálculos responsivos para las posiciones
  const totalCards = cards.value.length
  const cardWidth = 200

  // Distribuir las cartas en el contenedor disponible
  let offsetX = (containerWidth - cardWidth) / (totalCards > 1 ? totalCards - 1 : 1)
  // Limitar el offset para evitar superposición excesiva
  offsetX = Math.min(offsetX, 200)

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

function goToCardDetailView(id: string) {
  router.push({ name: 'CardDetail', params: { id } })
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

.card-wrapper-mobile {
  transform-style: preserve-3d;
  will-change: transform;
}

.card-wrapper-mobile:active {
  transform: scale(1.05);
}

#container-random-cards > div {
  transition: all 0.4s cubic-bezier(0.5, 0, 0.2, 1);
}

#container-random-cards {
  z-index: 1;
}

@media (max-width: 768px) {
  .gradient-text {
    font-size: 2rem !important;
  }
}
</style>
