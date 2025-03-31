export default class CardWeaknesses {
  constructor(
    private readonly _type: string,
    private readonly _value: string,
  ) {}

  get type() {
    return this._type
  }

  get value() {
    return this._value
  }
}
