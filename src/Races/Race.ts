export default abstract class Race {
  private _name: string;
  private _dexterity: number;

  constructor(nome: string, dexterity: number) {
    this._name = nome;
    this._dexterity = dexterity;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances():number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}
