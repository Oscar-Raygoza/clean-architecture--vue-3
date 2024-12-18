import { container } from '@/container'
import cardTypes from '@/modules/card/types'

import { reactive, computed, ref } from 'vue'
import { defineStore } from 'pinia'

// entities
import Card from '@/domain/card/entities/Card'

// repositories
import type { CardRepository } from '@/domain/card/repository/CardRepository'
import type { CardsState } from './types/CardState'

export const useCardStore = defineStore('CardStore', () => {
  const state = reactive<CardsState>({
    cards: [],
  })

  const cards = computed(() => state.cards)

  async function getAllCards() {
    const cardsRepository = container.get<CardRepository>(cardTypes.cardsServiceRepository)

    const cards: Card[] = await cardsRepository.find()

    state.cards = cards
  }

  return { getAllCards, cards }
})
