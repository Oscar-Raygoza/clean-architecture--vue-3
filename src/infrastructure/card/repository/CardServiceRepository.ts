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

// environment
import EnvironmentHelper from '@/infrastructure/config/env/EnviromentHelper'
import type { FindSimpleCardResponseDto } from '@/domain/card/dto/FindSimpleCardResponseDto'
import CardDetails from '@/domain/card/entities/CardDetails'
import CardAttacks from '@/domain/card/entities/CardAttacks'
import CardWeaknesses from '@/domain/card/entities/CardWeaknesses'
import CardPrice from '@/domain/card/entities/CardPrice'

@injectable()
export default class CardServiceRepository implements CardRepository {
  constructor(
    @inject(networkTypes.httpKyClient)
    private readonly http: HttpRepository,
  ) {}
  async find(port: FindCardsDto): Promise<Pagination<Card[]>> {
    try {
      const response = (await this.http.get('cards', {
        data: {
          q: String(port.query),
          pageSize: port.size ?? 5,
          page: port.page ?? 1,
        },
        baseUrl: EnvironmentHelper.BASE_TCG_API_URL,
        retry: 1,
      })) as unknown as FindCardsResponseDto

      const cards = response.data

      return {
        totalPages: Math.ceil(response.totalCount / response.pageSize),
        size: response.pageSize,
        data: cards.map((card) => {
          return new Card(
            card.id,
            new CardDetails(
              card.artist,
              card.attacks?.map((attack) => {
                return new CardAttacks(
                  attack.convertedEnergyCost,
                  attack.cost,
                  attack.damage,
                  attack.name,
                  attack.text,
                )
              }) ?? [],
              card.hp,
              [
                new CardPrice(
                  card.tcgplayer.prices.holofoil?.market ?? 0,
                  card.tcgplayer.prices.holofoil?.low ?? 0,
                  card.tcgplayer.prices.holofoil?.high ?? 0,
                  card.tcgplayer.url,
                  'TCG Player',
                ),
                new CardPrice(
                  card.cardmarket?.prices?.averageSellPrice ?? 0,
                  card.cardmarket?.prices?.lowPrice ?? 0,
                  card.cardmarket?.prices?.avg30 ?? 0,
                  card.cardmarket?.url,
                  'Cardmarket',
                ),
              ],
              card.rarity,
              card.convertedRetreatCost,
              card.set.name,
              card.subtypes,
              card.weaknesses.map((weakness) => {
                return new CardWeaknesses(weakness.type, weakness.value)
              }),
            ),
            card.images.large,
            card.name,
            card.supertype,
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

  async findById(id: string): Promise<Card> {
    try {
      const response = (await this.http.get(`cards/${id}`, {
        baseUrl: EnvironmentHelper.BASE_TCG_API_URL,
        retry: 1,
      })) as unknown as FindSimpleCardResponseDto

      console.log(response)
    } catch (error) {
      throw new CardServiceHandlerError(
        CardServicesHandlerErrorCodes.NOT_FOUND,
        'Failed to get card 🥺',
      )
    }
  }
}
