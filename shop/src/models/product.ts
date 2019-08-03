export class Product {
  constructor(
    public categoryId: string,
    public imageUrl: string,
    public title: string,
    public price: number,
    public description: string
  ) {}
}
