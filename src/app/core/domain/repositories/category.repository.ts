import { Category } from "../entities/category.entity";

export interface CategoryRepository {
    getAll(): Promise<Category[]>;
 
}