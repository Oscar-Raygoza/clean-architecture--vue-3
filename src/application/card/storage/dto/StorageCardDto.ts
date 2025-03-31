import type CardDetails from '@/domain/card/entities/CardDetails'

export interface StorageCardsDto {
  readonly _id: string
  readonly _details: CardDetails
  readonly _image: string
  readonly _name: string
  readonly _supertype: string
}
