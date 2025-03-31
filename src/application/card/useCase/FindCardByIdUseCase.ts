import { inject, injectable } from 'inversify'

// di
import cardTypes from '@/infrastructure/card/di/types'

// entities
import type Card from '@/domain/card/entities/Card'

// types
import type UseCase from '@/application/common/useCase/UseCase'

// repository
import type { CardRepository } from '@/domain/card/repository/CardRepository'

@injectable()
export default class FindCardByIdUseCase implements UseCase<string, Card> {
  constructor(
    @inject(cardTypes.cardsServiceRepository)
    private readonly _cardRepository: CardRepository,
  ) {}

  async run(id: string): Promise<Card> {
    const card = await this._cardRepository.findById(id)

    return card
  }
}
