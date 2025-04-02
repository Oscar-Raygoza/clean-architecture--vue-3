<template>
  <div class="min-h-screen">
    <TCGSlideNav title="Card Details" />

    <div v-if="isLoading">
      <section class="container mx-auto px-4 py-4">
        <div class="flex flex-col md:flex-row gap-8">
          <div class="w-full md:w-1/2 flex justify-center">
            <CardSkeleton class="!w-[90%] sm:!w-[400px] !h-[520px]" />
          </div>

          <div class="w-full md:w-1/2 flex flex-col gap-6">
            <CardDetailsSkeleton />
          </div>
        </div>
      </section>
    </div>

    <section v-if="!isLoading && !card?.name" class="flex justify-center items-center flex-col px-4">
      <CardsNotFound class="w-full sm:w-[70%] md:w-[50%] lg:w-[30%]" />
    </section>

    <section v-if="!isLoading && card?.name" class="container mx-auto px-4 py-4">
      <div class="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
        <div class="w-full lg:w-1/2 flex justify-center">
          <CardItem :card="card" class="!w-[90%] sm:!w-[400px] !h-[520px]" />
        </div>

        <div class="w-full lg:w-1/2 flex flex-col gap-6">
          <HeaderCard :name="card.name" :rarity="card.details.rarity" :type="cardType" :hp="card.details.hp" />

          <InfoPanel title="Stats">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <StatItem label="Type" :value="cardType" />
              <StatItem label="Weakness" :value="formatWeakness(card.details.weaknesses)" />
              <div>
                <p class="text-sm text-neutral-dark-dark dark:text-neutral-dark-lighter">Retreat Cost</p>
                <div class="flex items-center gap-1 mt-1">
                  <img v-for="index in card.details.retreatCost" :key="index" :src="useEnergyIcon('Colorless')" alt="Energy" class="w-5 h-5" />
                </div>
              </div>
              <StatItem label="Expansion" :value="card.details.set" />
            </div>
          </InfoPanel>

          <InfoPanel v-if="hasAttacks" title="Attacks">
            <div class="space-y-4">
              <div v-for="(attack, index) in card.details.attacks" :key="index" class="border-b border-slate-700 pb-4 last:border-0 last:pb-0">
                <div class="flex flex-wrap items-center gap-2">
                  <div class="flex items-center">
                    <img v-for="(energy, energyIndex) in attack.cost" :key="energyIndex" :src="useEnergyIcon(energy)" alt="Energy" class="w-5 h-5 mr-1" />
                  </div>
                  <h4 class="font-medium">{{ attack.name }}</h4>
                  <span class="ml-auto font-bold">{{ attack.damage }}</span>
                </div>
                <p class="mt-2 text-sm text-neutral-dark-dark dark:text-neutral-dark-lighter">
                  {{ attack.text }}
                </p>
              </div>
            </div>
          </InfoPanel>

          <InfoPanel v-if="hasPrices" title="Market Prices in USD">
            <div class="space-y-3">
              <div v-for="(price, index) in card.details.prices" :key="index" class="flex flex-wrap justify-between gap-2">
                <a :href="price.purchaseLink" class="text-brand-primary-light font-bold underline">
                  <span>{{ price.store }}</span>
                </a>
                <div>
                  <span class="dark:text-accent-light text-error-dark font-bold">{{ formatPrice(price.price) }}</span>
                  <span v-if="price.lowPrice" class="text-sm text-neutral-dark-dark dark:text-neutral-dark-lighter ml-2">
                    (Low: {{ formatPrice(price.lowPrice) }} - High: {{ formatPrice(price.highPrice) }})
                  </span>
                </div>
              </div>
            </div>
          </InfoPanel>

          <InfoPanel title="Illustrator">
            <p>{{ card.details.artist }}</p>
          </InfoPanel>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, type Ref, ref } from 'vue'

import { useRoute } from 'vue-router'

import { useCardStore } from '../stores/Card/CardStore'

// entities
import type Card from '@/domain/card/entities/Card'

// components
import CardDetailsSkeleton from '@/app/components/Card/Skeleton/CardDetailsSkeleton.vue'
import CardItem from '@/app/components/Card/CardItem.vue'
import CardSkeleton from '@/app/components/Card/Skeleton/CardSkeleton.vue'
import CardsNotFound from '@/app/components/Card/NotFound/CardsNotFound.vue'
import HeaderCard from '@/app/components/Card/Details/HeaderCard.vue'
import InfoPanel from '@/app/components/Card/Details/InfoPanel.vue'
import StatItem from '@/app/components/Card/Details/StatItem.vue'
import TCGSlideNav from '@/app/components/Shared/TCGSlideNav/TCGSlideNav.vue'

// composables
import { useEnergyIcon } from '@/app/composables/useEnergyIcon'

const route = useRoute()

const cardStore = useCardStore()

onMounted(async () => {
  await searchCard()
})

// state
const isLoading = ref<boolean>(false)

// getters
const card = computed(() => cardStore.card) as unknown as Ref<Card>

const hasAttacks = computed(
  () => card.value?.details?.attacks && card.value.details.attacks.length > 0,
)

const hasPrices = computed(
  () => card.value?.details?.prices && card.value.details.prices.length > 0,
)

const cardType = computed(() => determineCardType(card.value))

async function searchCard() {
  isLoading.value = true

  await cardStore.getCardById(route.params.id as string).finally(() => {
    isLoading.value = false
  })
}
function determineCardType(card: Card) {
  if (!card?.details) return 'Normal'

  if (card.details.attacks?.length) {
    const nonColorlessTypes = card.details.attacks
      .flatMap((attack: Card['_details']['_attacks'][number]) => attack.cost)
      .filter((type: string) => type !== 'Colorless')

    if (nonColorlessTypes.length > 0) {
      return nonColorlessTypes[0]
    }
  }

  return 'Normal'
}

function formatPrice(price: number) {
  if (!price) return
  return `$${price.toFixed(2)}`
}

function formatWeakness(weaknesses: Card['_details']['_weaknesses']) {
  if (!weaknesses || !weaknesses.length) return 'None'

  return `${weaknesses[0].type} ${weaknesses[0].value}`
}
</script>
