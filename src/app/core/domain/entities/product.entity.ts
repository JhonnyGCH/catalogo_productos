import { Category } from "./category.entity";

export class Product {

  id: number;
  name: string;
  description?: string;
  price: number;
  stock: number;
  imageUrl?: string;
  category?: Category;
  createdAt?: Date;
  updatedAt?: Date;
  
    constructor(
        id: number,
        name: string,
        price: number,
        stock: number,
        description?: string,
        imageUrl?: string,
        category?: Category,
        createdAt?: Date,
        updatedAt?: Date
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.description = description;
        this.imageUrl = imageUrl;
        this.category = category;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
