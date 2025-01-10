import { container } from '@/container'
import cardTypes from '@/infrastructure/card/di/types'

import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

// entities
import Card from '@/domain/card/entities/Card'

// repositories
import type { PersistentStorageRepository } from '@/infrastructure/persistence/enum/PersistentStorageRepository'

// dto's
import type FindCardsDto from '@/domain/card/dto/FindCardsDto'

// useCase
import type UseCase from '@/application/common/useCase/UseCase'

// state
import type { CardsState } from './types/CardState'

export const useCardStore = defineStore('CardStore', () => {
  // repositories
  const getRandomCardsUseCase = container.get<UseCase<Omit<FindCardsDto, 'query'>, Card[]>>(
    cardTypes.getRandomCardsUseCase,
  )

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
  async function getRandomCards(port?: Omit<FindCardsDto, 'query'>) {
    const cards: Card[] = await getRandomCardsUseCase.run(port)

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
