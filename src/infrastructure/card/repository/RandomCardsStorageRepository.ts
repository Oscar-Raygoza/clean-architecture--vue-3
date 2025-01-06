import { inject, injectable } from 'inversify'

// types
import cardsTypes from '@/infrastructure/card/di/types'
import persistenceTypes from '@/infrastructure/persistence/di/types'

import type Card from '@/domain/card/entities/Card'

import type { PersistentStorageRepository } from '@/infrastructure/persistence/enum/PersistentStorageRepository'
import type { PersistenceRepository } from '@/infrastructure/persistence/repository/PersistenceRepository'

import type MapperType from '@/application/common/mapper/type/MapperType'
import type { StorageCardsDto } from '@/application/card/storage/dto/StorageCardDto'
import { CardsStorageKeys } from '@/application/card/storage/enum/CardsStorageKeys'

@injectable()
export class RandmonCardsStorageRepository implements PersistentStorageRepository<Card[]> {
  constructor(
    @inject(persistenceTypes.sessionStorageManagerRepository)
    private readonly storageManager: PersistenceRepository,
    @inject(cardsTypes.persistentCardsMapper)
    private readonly persistentCardsMapper: MapperType<StorageCardsDto, Card>,
  ) { }

  get(): Card[] {
    const storageCards = this.storageManager.getItem<StorageCardsDto[]>(
      CardsStorageKeys.RANDOM_CARDS,
      [],
    )

    if (storageCards.length) {
      const cards: Card[] = storageCards.map((card) => {
        return this.persistentCardsMapper.transform(card)
      })

      return cards
    }

    return []
  }

  set(cards: Card[]): void {
    if (cards) return this.storageManager.setItem(CardsStorageKeys.RANDOM_CARDS, cards)

    this.storageManager.removeItem(CardsStorageKeys.RANDOM_CARDS)
  }
}
