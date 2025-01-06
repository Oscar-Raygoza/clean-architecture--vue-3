import { container } from '@/container'
import cardTypes from '@/infrastructure/card/di/types'

import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

// entities
import Card from '@/domain/card/entities/Card'

// repositories
import type { CardRepository } from '@/domain/card/repository/CardRepository'
import type { CardsState } from './types/CardState'

import type { PersistentStorageRepository } from '@/infrastructure/persistence/enum/PersistentStorageRepository'

// dto's
import type FindCardsDto from '@/domain/card/dto/FindCardsDto'

export const useCardStore = defineStore('CardStore', () => {
  // repositories
  const cardsRepository = container.get<CardRepository>(cardTypes.cardsServiceRepository)

  const randomCardsStorageRepository = container.get<PersistentStorageRepository<Card[]>>(
    cardTypes.randomCardsStorageRepository,
  )

  // data
  const state = reactive<CardsState>({
    _cards: [],
    _isHydrated: false,
    _randomCards: [],
  })

  // getters
  const cards = computed(() => state._cards)

  const isHydrated = computed(() => state._isHydrated)

  const randomCards = computed(() => state._randomCards)

  // methods
  async function getRandomCards(port?: FindCardsDto) {
    const MAX_VALUE_TO_GET_POKEMON = 151

    const pokemonPosition = Math.floor(Math.random() * MAX_VALUE_TO_GET_POKEMON) + 1

    const cards: Card[] = await cardsRepository.find({
      query: `nationalPokedexNumbers:[${pokemonPosition} TO ${pokemonPosition + 4}]`,
      page: port?.page,
      size: port?.size,
    })

    state._randomCards = cards

    randomCardsStorageRepository.set(cards)
  }

  function hydrate() {
    _hydrateRandomCards()

    state._isHydrated = true
  }

  function _hydrateRandomCards() {
    const cards = randomCardsStorageRepository.get()

    if (cards) {
      state._randomCards = cards
      randomCardsStorageRepository.set(cards)
    }
  }

  return { getRandomCards, hydrate, isHydrated, cards, randomCards }
})
