import { inject, injectable } from 'inversify'

// entities
import Card from '@/domain/card/entities/Card'

// dto's
import type { Pagination } from '@/application/common/pagination/Pagination'
import type FindCardsDto from '@/domain/card/dto/FindCardsDto'

// repository
import type { CardRepository } from '@/domain/card/repository/CardRepository'

// di
import networkTypes from '@/infrastructure/network/di/types'

// errors
import CardServiceHandlerError from '@/application/card/error/CardServiceHandlerError'
import { CardServicesHandlerErrorCodes } from '@/application/card/error/enum/CardServicesHandlerErrorCodes'
import type { HttpRepository } from '@/infrastructure/network/repository/HttpRepository'
import type { FindCardsResponseDto } from '@/domain/card/dto/FindCardResponseDto'

@injectable()
export default class CardServiceRepository implements CardRepository {
  constructor(
    @inject(networkTypes.httpKyClient)
    private readonly http: HttpRepository,
  ) {}
  async find(port: FindCardsDto): Promise<Pagination<Card[]>> {
    try {
      const response = (await this.http.get('https://api.pokemontcg.io/v2/cards', {
        data: {
          q: String(port.query),
          pageSize: port.size ?? 5,
          page: port.page ?? 1,
        },
        retry: 1,
      })) as unknown as FindCardsResponseDto

      const cards = response.data

      return {
        totalPages: Math.ceil(response.totalCount / response.pageSize),
        size: response.pageSize,
        data: cards.map((card) => {
          return new Card(
            card.id,
            card.name,
            card.supertype,
            card.subtypes,
            card.hp,
            card.images.large,
          )
        }),
      } as Pagination<Card[]>
    } catch (error) {
      throw new CardServiceHandlerError(
        CardServicesHandlerErrorCodes.NOT_FOUND,
        'Failed to get cards 😣',
      )
    }
  }
}
