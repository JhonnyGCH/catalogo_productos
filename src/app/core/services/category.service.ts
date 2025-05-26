import { Injectable } from '@angular/core';
import * as categoryUseCase from "../useCases/category.useCase"
import { Category } from '../domain/entities/category.entity';
@Injectable({
    providedIn: 'root',
})

export class CategoryService {

    getAllCategories(): Promise<Category[]> {
        return categoryUseCase.getAllCategories();
    }
   
}