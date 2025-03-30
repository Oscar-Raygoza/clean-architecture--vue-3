// entities
import type Card from '@/domain/card/entities/Card'

export type CardsState = {
  _cards: Card[],
  _isHydrated: boolean
  _randomCards: Card[],
  _paginationCards: {
    _totalPages: number
    _currentPage: number
  }
}
