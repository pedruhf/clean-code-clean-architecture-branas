export class Item {

  constructor(
    readonly id: number,
    readonly category: string,
    readonly description: string,
    readonly price: number,
    readonly width: number = 0,
    readonly height: number = 0,
    readonly length: number = 0,
    readonly weight: number = 0
  ) {}

  getVolume(): number {
    return (this.width / 100) * (this.height / 100) * (this.length / 100);
  }

  getDensity(): number {
    return this.weight / this.getVolume();
  }
}
