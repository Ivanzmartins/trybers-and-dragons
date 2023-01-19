import Race from './Race';

export default class Orc extends Race {
  public maxLifePoints: number;
  private static raceCounter = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 74;
    Orc.addCounter();
  }

  private static addCounter() {
    this.raceCounter += 1;
  }

  static createdRacesInstances(): number {
    return this.raceCounter;
  }
}