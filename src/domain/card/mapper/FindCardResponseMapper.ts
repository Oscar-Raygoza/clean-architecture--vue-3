import { injectable } from 'inversify'

import Mapper from '@/application/common/mapper/Mapper'

// types
import type { FindCardsResponseDto } from '@/domain/card/dto/FindCardResponseDto'
import type { Pagination } from '@/application/common/pagination/Pagination'

// entities
import Card from '@/domain/card/entities/Card'
import CardAttacks from '@/domain/card/entities/CardAttacks'
import CardDetails from '@/domain/card/entities/CardDetails'
import CardPrice from '@/domain/card/entities/CardPrice'
import CardWeaknesses from '@/domain/card/entities/CardWeaknesses'

@injectable()
export default class FindCardResponseMapper extends Mapper<
  FindCardsResponseDto,
  Pagination<Card[]>
> {
  protected map(entity: FindCardsResponseDto): Pagination<Card[]> {

    const cards = entity.data

    return {
      totalPages: Math.ceil(entity.totalCount / entity.pageSize),
      size: entity.pageSize,
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
                card.tcgplayer?.prices?.holofoil?.market ?? 0,
                card.tcgplayer?.prices?.holofoil?.low ?? 0,
                card.tcgplayer?.prices?.holofoil?.high ?? 0,
                card.tcgplayer?.url,
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
            card.set?.name,
            card.subtypes,
            card.weaknesses?.map((weakness) => {
              return new CardWeaknesses(weakness.type, weakness.value)
            }) ?? [],
          ),
          card.images.large,
          card.name,
          card.supertype,
        )
      }),
    } as Pagination<Card[]>
  }
}
