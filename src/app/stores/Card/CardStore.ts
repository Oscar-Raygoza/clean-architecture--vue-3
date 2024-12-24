import { container } from '@/container'
import cardTypes from '@/modules/card/types'

import { reactive, computed, ref } from 'vue'
import { defineStore } from 'pinia'

// entities
import Card from '@/domain/card/entities/Card'

// repositories
import type { CardRepository } from '@/domain/card/repository/CardRepository'
import type { CardsState } from './types/CardState'

// dto's
import type FindCardsDto from '@/domain/card/dto/FindCardsDto'

export const useCardStore = defineStore('CardStore', () => {
  const state = reactive<CardsState>({
    cards: [],
  })

  const cards = computed(() => state.cards)

  async function getRandomCards(port?: FindCardsDto) {
    const cardsRepository = container.get<CardRepository>(cardTypes.cardsServiceRepository)

    const MAX_VALUE_TO_GET_POKEMON = 151

    const pokemonPosition = Math.floor(Math.random() * MAX_VALUE_TO_GET_POKEMON) + 1;

    const cards: Card[] = await cardsRepository.find({
      query: `nationalPokedexNumbers:[${pokemonPosition} TO ${pokemonPosition + 4}]`,
      page: port?.page,
      size: port?.size
    })

    state.cards = cards
  }

  return { getRandomCards, cards }
})
