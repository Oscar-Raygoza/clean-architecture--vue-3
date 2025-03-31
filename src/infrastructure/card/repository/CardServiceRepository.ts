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
import cardTypes from '@/infrastructure/card/di/types'

// errors
import CardServiceHandlerError from '@/application/card/error/CardServiceHandlerError'
import { CardServicesHandlerErrorCodes } from '@/application/card/error/enum/CardServicesHandlerErrorCodes'
import type { HttpRepository } from '@/infrastructure/network/repository/HttpRepository'
import type { FindCardsResponseDto } from '@/domain/card/dto/FindCardResponseDto'

// environment
import EnvironmentHelper from '@/infrastructure/config/env/EnviromentHelper'
import type { FindSimpleCardResponseDto } from '@/domain/card/dto/FindSimpleCardResponseDto'
import type Mapper from '@/application/common/mapper/Mapper'

@injectable()
export default class CardServiceRepository implements CardRepository {
  constructor(
    @inject(networkTypes.httpKyClient)
    private readonly http: HttpRepository,

    @inject(cardTypes.findCardsResponseMapper)
    private readonly findCardsResponseMapper: Mapper<FindCardsResponseDto, Pagination<Card[]>>,

    @inject(cardTypes.findSimpleCardResponseMapper)
    private readonly findSimpleCardResponseMapper: Mapper<FindSimpleCardResponseDto, Card>,
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

      return this.findCardsResponseMapper.transform(response)
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
        retry: 2,
      })) as unknown as FindSimpleCardResponseDto

      return this.findSimpleCardResponseMapper.transform(response)
    } catch (error) {
      throw new CardServiceHandlerError(
        CardServicesHandlerErrorCodes.NOT_FOUND,
        'Failed to get card 🥺',
      )
    }
  }
}
