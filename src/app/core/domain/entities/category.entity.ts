import { Product } from "./product.entity";

export class Category {
    id: number;
    name: string;
    description?: string;
    imageUrl?: string;
    createdAt?: Date;
    updatedAt?: Date;
    products: Product[];

    constructor(id: number, name: string, description?: string, imageUrl?: string, createdAt?: Date, updatedAt?: Date, products: Product[] = []) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.products = products;
    }
  }
  