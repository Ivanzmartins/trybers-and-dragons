export default abstract class Race {
  private readonly _name: string;
  private readonly _dexterity: number;

  constructor(nome: string, dexterity: number) {
    this._name = nome;
    this._dexterity = dexterity;
  }

  get name(): string {
    return this.name;
  }

  get dexterity(): number {
    return this.dexterity;
  }

  static createRacesInstances():number {
    throw new Error('Not implemented.');
  }

  abstract get maxLifePoints(): number;
}
