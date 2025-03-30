import { inject, injectable } from 'inversify'

// di
import cardTypes from '@/infrastructure/card/di/types'

// entities
import type Card from '@/domain/card/entities/Card'

// types
import type FindCardsDto from '@/domain/card/dto/FindCardsDto'
import type UseCase from '@/application/common/useCase/UseCase'

// repository
import type { CardRepository } from '@/domain/card/repository/CardRepository'
import type { Pagination } from '@/application/common/pagination/Pagination'

@injectable()
export default class FindCardsUseCase implements UseCase<FindCardsDto, Pagination<Card[]>> {
  constructor(
    @inject(cardTypes.cardsServiceRepository)
    private readonly _cardRepository: CardRepository,
  ) { }

  async run(port: FindCardsDto): Promise<Pagination<Card[]>> {
    const cards = await this._cardRepository.find({
      query: port?.query,
      page: port?.page,
      size: port?.size,
    })

    return cards
  }
}
