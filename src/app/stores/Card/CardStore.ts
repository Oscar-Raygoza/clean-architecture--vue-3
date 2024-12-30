import { container } from '@/container'
import cardTypes from '@/infrastructure/card/di/types'

import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

// entities
import Card from '@/domain/card/entities/Card'

// repositories
import type { CardRepository } from '@/domain/card/repository/CardRepository'
import type { CardsState } from './types/CardState'

import type { PersistentStorageRepository } from '@/infrastructure/persistence/enum/PersistenceStorageRepository'

// dto's
import type FindCardsDto from '@/domain/card/dto/FindCardsDto'

export const useCardStore = defineStore('CardStore', () => {
  // repositories
  const cardsRepository = container.get<CardRepository>(cardTypes.cardsServiceRepository)

  const cardStorageRepository = container.get<PersistentStorageRepository<Card[]>>(
    cardTypes.persistentStorageRepository,
  )

  // data
  const state = reactive<CardsState>({
    cards: [],
  })

  // getters
  const cards = computed(() => state.cards)

  // methods
  async function getRandomCards(port?: FindCardsDto) {
    const MAX_VALUE_TO_GET_POKEMON = 151

    const pokemonPosition = Math.floor(Math.random() * MAX_VALUE_TO_GET_POKEMON) + 1

    const cards: Card[] = await cardsRepository.find({
      query: `nationalPokedexNumbers:[${pokemonPosition} TO ${pokemonPosition + 4}]`,
      page: port?.page,
      size: port?.size,
    })

    state.cards = cards

    cardStorageRepository.set(cards)
  }

  function hydrate() {
    _hydrateRandomCards()
  }

  function _hydrateRandomCards() {
    const cards = cardStorageRepository.get()

    if (cards) {
      state.cards = cards
      cardStorageRepository.set(cards)
    }
  }

  return { getRandomCards, hydrate, cards }
})
