export interface FindSimpleCardResponseDto {
  readonly data: CardResponseDto
}

export interface CardResponseDto {
  readonly id: string
  readonly name: string
  readonly supertype: Supertype
  readonly subtypes: Subtype[]
  readonly level?: string
  readonly hp: string
  readonly types: string[]
  readonly abilities?: Ability[]
  readonly weaknesses: Resistance[]
  readonly resistances?: Resistance[]
  readonly retreatCost: RetreatCost[]
  readonly convertedRetreatCost: number
  readonly set: Set
  readonly number: string
  readonly artist: string
  readonly rarity: string
  readonly flavorText?: string
  readonly nationalPokedexNumbers: number[]
  readonly legalities: Legalities
  readonly images: ImageCard
  readonly tcgplayer: Tcgplayer
  readonly cardmarket: Cardmarket
  readonly attacks?: Attack[]
}

export interface Ability {
  readonly name: string
  readonly text: string
  readonly type: Type
}

export enum Type {
  Ability = 'Ability',
  PokéBody = 'Poké-Body',
  PokéPower = 'Poké-Power',
  PokémonPower = 'Pokémon Power',
}

export interface Attack {
  readonly name: string
  readonly cost: string[]
  readonly convertedEnergyCost: number
  readonly damage: string
  readonly text: string
}

export interface Cardmarket {
  readonly url: string
  readonly updatedAt: Date
  readonly prices: { [key: string]: number }
}

export interface ImageCard {
  readonly small: string
  readonly large: string
}

export interface Legalities {
  readonly unlimited: Expanded
  readonly expanded?: Expanded
}

export enum Expanded {
  Legal = 'Legal',
}

export interface Resistance {
  readonly type: string
  readonly value: string
}

export enum RetreatCost {
  Colorless = 'Colorless',
}

export interface Set {
  readonly id: string
  readonly name: string
  readonly series: string
  readonly printedTotal: number
  readonly total: number
  readonly legalities: Legalities
  readonly ptcgoCode?: string
  readonly releaseDate: string
  readonly updatedAt: Date
  readonly images: SetImages
}

export interface SetImages {
  readonly symbol: string
  readonly logo: string
}

export enum Subtype {
  Basic = 'Basic',
}

export enum Supertype {
  Pokémon = 'Pokémon',
}

export interface Tcgplayer {
  readonly url: string
  readonly updatedAt: Date
  readonly prices: Prices
}

export interface Prices {
  readonly the1StEditionHolofoil?: Edition
  readonly unlimitedHolofoil?: Edition
  readonly holofoil?: Edition
  readonly reverseHolofoil?: Edition
  readonly normal?: Edition
  readonly the1StEdition?: Edition
  readonly unlimited?: Edition
}

export interface Edition {
  readonly low: number
  readonly mid: number
  readonly high: number
  readonly market: number
  readonly directLow: number | null
}
