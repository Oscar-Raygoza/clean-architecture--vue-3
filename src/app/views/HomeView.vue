<script setup lang="ts">
import { onMounted, computed, reactive } from 'vue'

// components
import TCGTitle from '@/app/components/Shared/TCGTitle/TCGTitle.vue'
import TCGInput from '@/app/components/Shared/TCGInputs/TCGInput.vue'
import CardItem from '@/app/components/Card/CardItem.vue'
import TCGBadge from '@/app/components/Shared/TCGBadge/TCGBadge.vue'

// i18n
import { useLocale } from '@/app/composables/useLocale'
import messages from '@/app/locales/views/Home/HomeView.lang'
const { t } = useLocale(messages)

// stores
import { useCardStore } from '../stores/Card/CardStore'
import type Card from '@/domain/card/entities/Card'

const cardsStore = useCardStore()

onMounted(async () => {
  if (!cardsStore.isHydrated) cardsStore.hydrate()

  if (!cardsStore.randomCards.length) await cardsStore.getRandomCards()
})

const cards = computed(() => cardsStore.randomCards) as unknown as Card[]

// state
const form = reactive({
  querySearch: '',
})

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
</script>

<template>
  <section id="main-search-page">
    <div class="flex justify-center items-center pt-24 flex-col">
      <TCGTitle variant="primary"> Pokémon TCG </TCGTitle>
      <TCGTitle variant="secondary"> {{ t('mainSubtitle') }}</TCGTitle>
    </div>

    <div class="flex justify-center items-center pt-10 flex-col">
      <form class="w-[50%]">
        <TCGInput id="search" v-model="form.querySearch" autofocus />
      </form>
      <p class="text-sm text-neutral-light dark:text-neutral-dark mt-5">
        {{ t('searchHelper') }}
      </p>
    </div>

    <section id="container-random-cards" class="relative w-full max-w-4xl mx-auto my-20">
      <div
        v-for="(card, position) in cards"
        :key="card.id"
        :style="getCardPosition(position)"
        class="card-wrapper transition-all duration-300 ease-out absolute"
      >
        <CardItem :card="card" />
      </div>
    </section>
  </section>
</template>

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
