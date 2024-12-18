import { injectable } from 'inversify'

import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'

// entities
import Card from '@/domain/card/entities/Card'

// repository
import type { CardRepository } from '@/domain/card/repository/CardRepository'

// errors
import CardServiceHandlerError from '@/modules/card/error/entities/CardServiceHandlerError'
import { CardServicesHandlerErrorCodes } from '@/modules/card/error/enum/CardServicesHandlerErrorCodes'

@injectable()
export default class CardServiceRepository implements CardRepository {
  async find(): Promise<Card[]> {
    try {
      const cards = await PokemonTCG.getAllCards({ page: 1 })
      console.log(import.meta.env)

      console.log({ cards })

      return cards.map((card) => {
        return new Card(
          card.id,
          card.name,
          card.supertype,
          card.subtypes,
          card.hp,
          card.images.large,
        )
      })
    } catch (error) {
      throw new CardServiceHandlerError(
        CardServicesHandlerErrorCodes.NOT_FOUND,
        'Failed to get cards 😣',
      )
    }
  }
}
