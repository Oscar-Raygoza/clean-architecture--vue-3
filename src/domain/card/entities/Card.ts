import type CardDetails from './CardDetails'

export default class Card {
  constructor(
    private readonly _id: string,
    private readonly _details: CardDetails,
    private readonly _image: string,
    private readonly _name: string,
    private readonly _supertype: string,
  ) {}

  get id() {
    return this._id
  }

  get details() {
    return this._details
  }

  get name() {
    return this._name
  }

  get supertype() {
    return this._supertype
  }

  get image() {
    return this._image
  }
}
