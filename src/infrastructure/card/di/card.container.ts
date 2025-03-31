import { ContainerModule } from 'inversify'
import type { interfaces } from 'inversify'

import cardTypes from '@/infrastructure/card/di/types'

// entities
import type Card from '@/domain/card/entities/Card'
import type { StorageCardsDto } from '@/application/card/storage/dto/StorageCardDto'

// dtos
import type { Pagination } from '@/application/common/pagination/Pagination'
import type FindCardsDto from '@/domain/card/dto/FindCardsDto'

// repository
import type { CardRepository } from '@/domain/card/repository/CardRepository'
import type { PersistentStorageRepository } from '@/infrastructure/persistence/enum/PersistentStorageRepository'

import { RandmonCardsStorageRepository } from '@/infrastructure/card/repository/RandomCardsStorageRepository'
import CardServiceRepository from '@/infrastructure/card/repository/CardServiceRepository'

// mappers
import type MapperType from '@/application/common/mapper/type/MapperType'
import PersistentCardsMapper from '@/application/card/storage/mapper/PersistentCardsMapper'

// use cases
import type UseCase from '@/application/common/useCase/UseCase'
import FindCardsUseCase from '@/application/card/useCase/FindCardsUseCase'
import FindRandomCardsUseCase from '@/application/card/useCase/FindRandomCardsUseCase'

export default new ContainerModule((bind: interfaces.Bind) => {
  // mappers
  bind<MapperType<StorageCardsDto, Card>>(cardTypes.persistentCardsMapper).to(PersistentCardsMapper)

  // repositories
  bind<CardRepository>(cardTypes.cardsServiceRepository).to(CardServiceRepository)

  bind<PersistentStorageRepository<Card[]>>(cardTypes.randomCardsStorageRepository).to(
    RandmonCardsStorageRepository,
  )

  // use cases
  bind<UseCase<FindCardsDto, Pagination<Card[]>>>(cardTypes.getCardsUseCase).to(FindCardsUseCase)

  bind<UseCase<Omit<FindCardsDto, 'query'>, Pagination<Card[]>>>(
    cardTypes.getRandomCardsUseCase,
  ).to(FindRandomCardsUseCase)
})
