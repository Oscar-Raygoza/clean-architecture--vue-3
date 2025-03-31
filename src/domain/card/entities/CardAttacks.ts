export default class CardAttacks {
  constructor(
    protected readonly _convertedEnergyCost: number,
    protected readonly _cost: string[],
    protected readonly _damage: string,
    protected readonly _name: string,
    protected readonly _text: string,
  ) {}

  get cost() {
    return this._cost
  }

  get name() {
    return this._name
  }

  get text() {
    return this._text
  }

  get damage() {
    return this._damage
  }

  get convertedEnergyCost() {
    return this._convertedEnergyCost
  }
}
