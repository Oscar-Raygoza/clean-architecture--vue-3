import { ContainerModule } from 'inversify'
import type { interfaces } from 'inversify'

import cardTypes from '@/infrastructure/card/di/types'

// entities
import type Card from '@/domain/card/entities/Card'
import type { StorageCardsDto } from '@/modules/card/storage/dto/StorageCardDto'

// repository
import type { CardRepository } from '@/domain/card/repository/CardRepository'
import CardServiceRepository from '@/infrastructure/card/repository/CardServiceRepository'
import { CardStorageRepository } from '@/infrastructure/card/repository/CardStorageRepository'

// mappers
import type MapperType from '@/modules/common/mapper/type/MapperType'
import PersistentCardsMapper from '@/modules/card/storage/mapper/PersistentCardsMapper'
import type { PersistentStorageRepository } from '@/infrastructure/persistence/enum/PersistenceStorageRepository'

export default new ContainerModule((bind: interfaces.Bind) => {
  // mappers
  bind<MapperType<StorageCardsDto, Card>>(cardTypes.persistentCardsMapper).to(PersistentCardsMapper)

  // repositories
  bind<CardRepository>(cardTypes.cardsServiceRepository).to(CardServiceRepository)

  bind<PersistentStorageRepository<Card[]>>(cardTypes.persistentStorageRepository).to(
    CardStorageRepository,
  )
})
