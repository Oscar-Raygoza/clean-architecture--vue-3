import { container } from '@/container'
import cardTypes from '@/infrastructure/card/di/types'

import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

// entities
import Card from '@/domain/card/entities/Card'

// repositories
import type { PersistentStorageRepository } from '@/infrastructure/persistence/enum/PersistentStorageRepository'

// dto's
import type { Pagination } from '@/application/common/pagination/Pagination'
import type FindCardsDto from '@/domain/card/dto/FindCardsDto'

// useCase
import type UseCase from '@/application/common/useCase/UseCase'

// state
import type { CardsState } from './types/CardState'

export const useCardStore = defineStore('CardStore', () => {
  // repositories
  const getRandomCardsUseCase = container.get<
    UseCase<Omit<FindCardsDto, 'query'>, Pagination<Card[]>>
  >(cardTypes.getRandomCardsUseCase)

  const getCardsUseCase = container.get<UseCase<FindCardsDto, Pagination<Card[]>>>(
    cardTypes.getCardsUseCase,
  )

  const randomCardsStorageRepository = container.get<PersistentStorageRepository<Card[]>>(
    cardTypes.randomCardsStorageRepository,
  )

  // data
  const state = reactive<CardsState>({
    _cards: [],
    _isHydrated: false,
    _randomCards: [],
    _paginationCards: {
      _totalPages: 0,
      _currentPage: 1,
    },
  })

  // getters
  const cards = computed(() => state._cards)

  const isHydrated = computed(() => state._isHydrated)

  const randomCards = computed(() => state._randomCards)

  const pagination = computed(() => state._paginationCards)

  // methods
  async function getCards(port?: FindCardsDto) {
    const cards: Pagination<Card[]> = await getCardsUseCase.run(port)

    state._cards = cards.data
    state._paginationCards._totalPages = cards.totalPages
    state._paginationCards._currentPage = port?.page ?? 1
  }

  async function getRandomCards(port?: Omit<FindCardsDto, 'query'>) {
    const cards: Pagination<Card[]> = await getRandomCardsUseCase.run(port)

    state._randomCards = cards.data

    randomCardsStorageRepository.set(cards.data)
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

  return { getCards, getRandomCards, hydrate, isHydrated, cards, randomCards, pagination }
})
