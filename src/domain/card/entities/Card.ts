export default class Card {
  constructor(
    private readonly _id: string,
    private readonly _name: string,
    private readonly _supertype: string,
    private readonly _subtypes: string[],
    private readonly _hp?: string,
    private readonly _image?: string,
  ) { }

  get id() {
    return this._id
  }

  get name() {
    return this._name
  }

  get supertype() {
    return this._supertype
  }
  get subtypes() {
    return this._subtypes
  }

  get hp() {
    return this._hp
  }

  get image() {
    return this._image
  }
}
