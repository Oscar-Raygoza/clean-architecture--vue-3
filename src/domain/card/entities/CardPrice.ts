export default class CardPrice {
  constructor(
    private readonly _price: number,
    private readonly _lowPrice: number,
    private readonly _highPrice: number,
    private readonly _purchaseLink: string,
    private readonly _store: string,
  ) {}

  get price() {
    return this._price
  }

  get lowPrice() {
    return this._lowPrice
  }

  get highPrice() {
    return this._highPrice
  }

  get purchaseLink() {
    return this._purchaseLink
  }

  get store() {
    return this._store
  }
}
