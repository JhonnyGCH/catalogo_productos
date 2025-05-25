import { Category } from "../entities/category.entity";

export interface CategoryRepository {
    getAll(): Promise<Category[]>;
    findById(id: number): Promise<Category | null>;
    create(category: Category): Promise<Category>;
    update(category: Category): Promise<Category| null>;
    delete(id: number): Promise<boolean>;
}