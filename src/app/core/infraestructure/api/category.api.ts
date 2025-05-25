import { Category } from "../../domain/entities/category.entity";
import { CATEGORY_SEED } from "../../domain/seeds/category.seed";

export class CategoryApi {
    findAll():Category[] {
        return CATEGORY_SEED;
    }
    findById(id: number): Category | null {
        return CATEGORY_SEED.find((category) => category.id === id)|| null;
    }
    create(category: Category): Category {
        const newCategory = { ...category, id: CATEGORY_SEED.length + 1 };
        CATEGORY_SEED.push(newCategory);
        return newCategory;
    }
    update( updatedCategory: Category): Category | null {
        const index = CATEGORY_SEED.findIndex((category) => category.id === updatedCategory.id);
        if (index !== -1) {
            CATEGORY_SEED[index] = { ...updatedCategory };
            return CATEGORY_SEED[index];
        }
        return null;
    }
    delete(id: number): boolean {
        const index = CATEGORY_SEED.findIndex((category) => category.id === id);
        if (index !== -1) {
            CATEGORY_SEED.splice(index, 1);
            return true;
        }
        return false;
    }
    
}