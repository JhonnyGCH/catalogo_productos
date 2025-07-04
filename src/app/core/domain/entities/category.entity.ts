
import { SubCategory } from "./subcategory.entity";

export class Category {
    id: number;
    name: string;
    description?: string;
    children: SubCategory[];
  
    constructor(
      id: number,
      name: string,
      description?: string,
      children: SubCategory[] = []
    ) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.children = children;
    }
  }