// entity
import type { Pagination } from '@/application/common/pagination/Pagination'
import Card from '@/domain/card/entities/Card'

// dto
import type FindCardsDto from '@/domain/card/dto/FindCardsDto'

export interface CardRepository {
  find(port: FindCardsDto): Promise<Pagination<Card[]>>
}
