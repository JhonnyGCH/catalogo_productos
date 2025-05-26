import { ProductSpec } from "./product.spec.entity";

export class Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    stars?: number;
    image?: string;
    specifications?: ProductSpec[] = [];
    description?: string
    discount?: number
    constructor(
      id: number,
      name: string,
      price: number,
      stock: number,
      stars?: number,
      image?: string,
      specifications?: ProductSpec[],
      description?: string,
      discount?: number
    ) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.stock = stock;
      this.stars = stars;
      this.image = image;
      this.specifications = specifications;
      this.description = description
      this.discount = discount
    }
  }
  