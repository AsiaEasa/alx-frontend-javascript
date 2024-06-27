export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(newC) {
    if (typeof newC !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = newC;
  }

  get name() {
    return this._name;
  }

  set name(newN) {
    if (typeof newN !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newN;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
