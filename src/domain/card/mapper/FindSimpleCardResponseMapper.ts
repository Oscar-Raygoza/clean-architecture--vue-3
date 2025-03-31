import { injectable } from 'inversify'

import Mapper from '@/application/common/mapper/Mapper'

// types
import type { FindSimpleCardResponseDto } from '@/domain/card/dto/FindSimpleCardResponseDto'

// entities
import Card from '@/domain/card/entities/Card'
import CardAttacks from '@/domain/card/entities/CardAttacks'
import CardDetails from '@/domain/card/entities/CardDetails'
import CardPrice from '@/domain/card/entities/CardPrice'
import CardWeaknesses from '@/domain/card/entities/CardWeaknesses'

@injectable()
export default class FindSimpleCardResponseMapper extends Mapper<FindSimpleCardResponseDto, Card> {
  protected map(entity: FindSimpleCardResponseDto): Card {
    const card = entity.data

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
  }
}
