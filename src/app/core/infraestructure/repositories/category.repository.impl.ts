import { Category } from "../../domain/entities/category.entity";
import { CategoryRepository } from "../../domain/repositories/category.repository";
import { CategoryApi } from "../api/category.api";

export class CategoryRepositoryImpl implements CategoryRepository {
    constructor(private categoryApi:CategoryApi= new CategoryApi) {}

    getAll(): Promise<Category[] > {
    return  new Promise((resolve) => {
      setTimeout(() => {
        const categories =  this.categoryApi.findAll();
        resolve(categories);
      }, 1000);
    });

   }

  async findById(id: number): Promise<Category | null> {
   
    return  new Promise((resolve) => {
        setTimeout(() => {
            const category =  this.categoryApi.findById(id);
          resolve(category);
        }, 1000);
      });
    
  }

  async create(category: Category): Promise<Category> {
    
    return new Promise((resolve) => {
      setTimeout(() => {
        const createdCategory = this.categoryApi.create(category);
        resolve(createdCategory);
      }, 1000);
    });
  }

  async update(category: Category): Promise<Category | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const updatedCategory = this.categoryApi.update(category);
        resolve(updatedCategory);
      }, 1000);
    });
  }
  async delete(id: number): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const response = this.categoryApi.delete(id);
        resolve(response);
      }, 1000);
    });
  }
}