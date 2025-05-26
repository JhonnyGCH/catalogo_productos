import { Product } from "./product.entity";

export class SubCategory {
    id: number;
    name: string;
    description?: string;
    products: Product[];
  
    constructor(
      id: number,
      name: string,
      description?: string,
      products: Product[] = []
    ) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.products = products;
    }
  }