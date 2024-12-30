import { injectable } from 'inversify'
import type { StorageCardsDto } from '../dto/StorageCardDto'

import Mapper from '@/modules/common/mapper/Mapper'

// entities
import Card from '@/domain/card/entities/Card'


@injectable()
export default class PersistentCardsMapper extends Mapper<StorageCardsDto, Card> {
  protected map(entity: StorageCardsDto): Card {
    return new Card(
      entity._id,
      entity._name,
      entity._supertype,
      entity._subtypes,
      entity._hp,
      entity._image,
    )
  }
}
