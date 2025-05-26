
export class Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    stars?: number;
    image?: string;
  
    constructor(
      id: number,
      name: string,
      price: number,
      stock: number,
      stars?: number,
      image?: string

    ) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.stock = stock;
      this.stars = stars;
      this.image = image
    }
  }
  