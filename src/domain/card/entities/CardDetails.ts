import type CardAttacks from './CardAttacks'
import type CardPrice from './CardPrice'
import type CardWeaknesses from './CardWeaknesses'

export default class CardDetails {
  constructor(
    private readonly _artist: string,
    private readonly _attacks: CardAttacks[],
    private readonly _hp: string,
    private readonly _prices: CardPrice[],
    private readonly _rarity: string,
    private readonly _retreatCost: number,
    private readonly _set: string,
    private readonly _subtypes: string[],
    private readonly _weaknesses: CardWeaknesses[],
  ) {}

  get artist() {
    return this._artist
  }

  get attacks() {
    return this._attacks
  }

  get hp() {
    return this._hp
  }

  get prices() {
    return this._prices
  }

  get rarity() {
    return this._rarity
  }

  get retreatCost() {
    return this._retreatCost
  }

  get set() {
    return this._set
  }

  get subtypes() {
    return this._subtypes
  }

  get weaknesses() {
    return this._weaknesses
  }
}
