import { ContainerModule } from 'inversify'
import type { interfaces } from 'inversify'

import cardTypes from '@/modules/card/types'

// repository
import type { CardRepository } from '@/domain/card/repository/CardRepository'
import CardServiceRepository from '@/domain/card/repository/CardServiceRepository'

export default new ContainerModule((bind: interfaces.Bind) => {
  // repositories
  bind<CardRepository>(cardTypes.cardsServiceRepository).to(CardServiceRepository)
})
