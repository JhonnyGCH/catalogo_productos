import { Injectable } from '@angular/core';
import * as categoryUseCase from "../useCases/category.useCase"
import { Category } from '../domain/entities/category.entity';
@Injectable({
    providedIn: 'root',
})

export class CategoryService {
    constructor() { }
    getAllCategories(): Promise<Category[]> {
        return categoryUseCase.getAllCategories();
    }
    getCategoryById(id: number): Promise<Category| null> {
        return categoryUseCase.getCategoryById(id);
    }
    createCategory(category: Category): Promise<Category> {
        return categoryUseCase.createCategory(category);
    }
    updateCategory(category: Category): Promise<Category| null> {
        return categoryUseCase.updateCategory(category);
    }
    deleteCategory(id: number): Promise<boolean> {
        return categoryUseCase.deleteCategory(id);
    }

}