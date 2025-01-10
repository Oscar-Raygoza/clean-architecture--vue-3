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

@injectable()
export default class FindRandomCardsUseCase implements UseCase<FindCardsDto, Card[]> {
  constructor(
    @inject(cardTypes.cardsServiceRepository)
    private readonly _cardRepository: CardRepository,
  ) { }

  async run(port: Omit<FindCardsDto, 'query'>): Promise<Card[]> {
    const MAX_VALUE_TO_GET_POKEMON = 151

    const pokemonPosition = Math.floor(Math.random() * MAX_VALUE_TO_GET_POKEMON) + 1

    const cards = await this._cardRepository.find({
      query: `nationalPokedexNumbers:[${pokemonPosition} TO ${pokemonPosition + 4}]`,
      page: port?.page,
      size: port?.size,
    })

    return cards
  }
}
