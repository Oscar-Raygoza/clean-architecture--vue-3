import { injectable } from 'inversify'

import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'

// entities
import Card from '@/domain/card/entities/Card'

// dto's
import type FindCardsDto from '@/domain/card/dto/FindCardsDto'

// repository
import type { CardRepository } from '@/domain/card/repository/CardRepository'

// errors
import CardServiceHandlerError from '@/modules/card/error/entities/CardServiceHandlerError'
import { CardServicesHandlerErrorCodes } from '@/modules/card/error/enum/CardServicesHandlerErrorCodes'

@injectable()
export default class CardServiceRepository implements CardRepository {
  async find(port: FindCardsDto): Promise<Card[]> {
    try {
      const cards = await PokemonTCG.findCardsByQueries({
        q: port.query || 'nationalPokedexNumbers:[1 TO 151]',
        pageSize: port.size || 5,
        page: port.page || 1,
      })

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
