export class Player {
  private megaCredits: number = 0;
  private megaCreditProduction: number = 0;
  private steel: number = 0;
  private steelProduction: number = 0;
  private titanium: number = 0;
  private titaniumProduction: number = 0;
  private plants: number = 0;
  private plantProduction: number = 0;
  private energy: number = 0;
  private energyProduction: number = 0;
  private heat: number = 0;
  private heatProduction: number = 0;

  public adjustMegaCredits(amount: number): boolean {
    // check if legal move
    if (this.megaCredits + amount < 0) {
      return false;
    }
    this.megaCredits += amount;
    return true;
  }

  public adjustMegaCreditProduction(amount: number): void {
    // MCProduction can go negative
    this.megaCreditProduction += amount;
  }

  public adjustTitanium(amount: number): boolean {
    // check if legal move
    if (this.titanium + amount < 0) {
      return false;
    }
    this.titanium += amount;
    return true;
  }

  public adjustTitaniumProduction(amount: number): boolean {
    if (this.titaniumProduction + amount < 0) {
      return false;
    }
    this.titaniumProduction += amount;
    return true;
  }
}
