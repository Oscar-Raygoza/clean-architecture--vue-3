<template>
  <div class="min-h-screen">
    <!-- Header con botón de regreso -->
    <div>
      <TCGSlideNav title="Card Details" />
    </div>

    <div class="container mx-auto px-4 py-4">
      <div class="flex flex-col md:flex-row gap-8">
        <div class="w-full md:w-1/2 flex justify-center">
          <CardItem :card="cardItem" class="!w-[400px] !h-[520px]" />
        </div>

        <div class="w-full md:w-1/2 flex flex-col gap-6">
          <div>
            <div class="flex items-center gap-2 justify-between">
              <div>
                <span class="text-yellow-400 font-bold">Pokémon</span>
                <span class="text-slate-400">•</span>
                <span class="text-slate-400 font-bold">{{ card.rarity }}</span>
              </div>
              <div>
                <TCGIcon
                  src="https://pokemontcg.guru/assets/lightning-732a70ef2e2dab4cc564fbf4d85cad48b0ac9ece462be3d42166a6fea4085773.png"
                  class="h-8 w-8 inline mx-4 mb-4"
                />
                <TCGTitle variant="primary" class="!text-default-dark dark:!text-default-light">
                  HP <span class="text-slate-400">•</span> 90
                </TCGTitle>
              </div>
            </div>
            <TCGTitle
              variant="primary"
              class="from-gradient-light-from to-gradient-light-to dark:from-gradient-dark-from dark:to-gradient-dark-to bg-gradient-radial-light dark:bg-gradient-radial-dark gradient-text"
            >
              {{ card.name }}
            </TCGTitle>
            <div class="mt-1 flex items-start gap-2">
              <span>{{ card.type }} Pokémon</span>
            </div>
          </div>

          <!-- Estadísticas -->
          <div class="bg-slate-800 rounded-xl p-4">
            <h3 class="text-lg font-semibold mb-3">Stats</h3>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="text-slate-400 text-sm">Type</p>
                <div class="flex items-center gap-2 mt-1">
                  <span>{{ card.type }}</span>
                </div>
              </div>
              <div>
                <p class="text-slate-400 text-sm">Weakness</p>
                <div class="flex items-center gap-2 mt-1">
                  <span>{{ card.weakness }}</span>
                </div>
              </div>
              <div>
                <p class="text-slate-400 text-sm">Retreat Cost</p>
                <div class="flex items-center gap-1 mt-1">
                  <img
                    v-for="(_, index) in card.retreatCost"
                    :key="index"
                    alt="Energy"
                    class="w-5 h-5"
                  />
                </div>
              </div>
              <div>
                <p class="text-slate-400 text-sm">Expansion</p>
                <p class="mt-1">{{ card.expansion }}</p>
              </div>
            </div>
          </div>

          <!-- Ataques -->
          <div v-if="card.attacks && card.attacks.length" class="bg-slate-800 rounded-xl p-4">
            <h3 class="text-lg font-semibold mb-3">Attacks</h3>
            <div class="space-y-4">
              <div
                v-for="(attack, index) in card.attacks"
                :key="index"
                class="border-b border-slate-700 pb-4 last:border-0 last:pb-0"
              >
                <div class="flex items-center gap-2">
                  <div class="flex items-center"></div>
                  <h4 class="font-medium">{{ attack.name }}</h4>
                  <span class="ml-auto font-bold">{{ attack.damage }}</span>
                </div>
                <p class="mt-2 text-slate-300">{{ attack.description }}</p>
              </div>
            </div>
          </div>

          <!-- Habilidades -->
          <div v-if="card.ability" class="bg-slate-800 rounded-xl p-4">
            <h3 class="text-lg font-semibold mb-3">Ability</h3>
            <div>
              <h4 class="font-medium text-teal-400">{{ card.ability.name }}</h4>
              <p class="mt-2 text-slate-300">{{ card.ability.description }}</p>
            </div>
          </div>

          <!-- Texto de la carta -->
          <div v-if="card.description" class="bg-slate-800 rounded-xl p-4">
            <h3 class="text-lg font-semibold mb-3">Card Text</h3>
            <p class="text-slate-300">{{ card.description }}</p>
          </div>

          <!-- Ilustrador -->
          <div class="bg-slate-800 rounded-xl p-4">
            <h3 class="text-lg font-semibold mb-3">Illustrator</h3>
            <p>{{ card.illustrator }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

// stores
import { useCardStore } from '../stores/Card/CardStore'

const cardsStore = useCardStore()

import CardItem from '@/app/components/Card/CardItem.vue'
import TCGTitle from '@/app/components/Shared/TCGTitle/TCGTitle.vue'
// entities
import Card from '@/domain/card/entities/Card'
import TCGSlideNav from '@/app/components/Shared/TCGSlideNav/TCGSlideNav.vue'
import TCGIcon from '../components/Shared/TCGIcons/TCGIcon.vue'

const route = useRoute()

onMounted(async () => {
  await cardsStore.getCardById(route.params.id as string)
})

const cardItem = computed(() => cardsStore.card) as unknown as Card


const card = ref({
  id: 'A2b-002',
  name: 'Pikachu',
  cardNumber: '002/047',
  rarity: 'Rare',
  type: 'Electric',
  hp: 70,
  weakness: 'Fighting',
  retreatCost: 1,
  expansion: 'Pocket Expansion',
  illustrator: 'Akira Komayama',
  imageUrl: '/images/pikachu.jpg',
  attacks: [
    {
      name: 'Quick Attack',
      cost: ['Lightning'],
      damage: '20+',
      description: 'Flip a coin. If heads, this attack does 20 more damage.',
    },
    {
      name: 'Electro Ball',
      cost: ['Lightning', 'Lightning', 'Colorless'],
      damage: '60',
      description: 'This attack does 10 more damage for each Energy attached to this Pokémon.',
    },
  ],
  ability: null,
  description:
    'When several of these Pokémon gather, their electricity can build and cause lightning storms.',
})
</script>
