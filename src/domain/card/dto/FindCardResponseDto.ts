export default interface FindCardResponseDto {
  id: string
  name: string
  supertype: string
  subtypes: string[]
  hp?: string
  types?: string[]
  evolesFrom?: string
  evolvesTo?: string[]
  rules?: string[]
}
