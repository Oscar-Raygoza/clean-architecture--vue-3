// entity
import Card from '@/domain/card/entities/Card'

export interface CardRepository {
  find(): Promise<Card[]>
}
