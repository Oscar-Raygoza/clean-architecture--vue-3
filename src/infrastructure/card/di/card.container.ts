import { ContainerModule } from 'inversify'
import type { interfaces } from 'inversify'

import cardTypes from '@/infrastructure/card/di/types'

// entities
import type Card from '@/domain/card/entities/Card'
import type { StorageCardsDto } from '@/application/card/storage/dto/StorageCardDto'

// repository
import type { CardRepository } from '@/domain/card/repository/CardRepository'
import CardServiceRepository from '@/infrastructure/card/repository/CardServiceRepository'
import { CardStorageDAO } from '@/infrastructure/card/dao/CardStorageDAO'

// mappers
import type MapperType from '@/application/common/mapper/type/MapperType'
import PersistentCardsMapper from '@/application/card/storage/mapper/PersistentCardsMapper'
import type { DataObjectStorage } from '@/infrastructure/persistence/enum/DataObjectStorage'

export default new ContainerModule((bind: interfaces.Bind) => {
  // mappers
  bind<MapperType<StorageCardsDto, Card>>(cardTypes.persistentCardsMapper).to(PersistentCardsMapper)

  // repositories
  bind<CardRepository>(cardTypes.cardsServiceRepository).to(CardServiceRepository)

  bind<DataObjectStorage<Card[]>>(cardTypes.cardStorageDAO).to(
    CardStorageDAO,
  )
})
