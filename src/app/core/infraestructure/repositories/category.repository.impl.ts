import { Category } from "../../domain/entities/category.entity";
import { CategoryRepository } from "../../domain/repositories/category.repository";
import { CategoryApi } from "../api/category.api";

export class CategoryRepositoryImpl implements CategoryRepository {
    constructor(private categoryApi:CategoryApi= new CategoryApi) {}

    /**
     * Funcion para obtener todas las categorias, es la implementacion del repository
     * @returns un lista de categorias
     */
    getAll(): Promise<Category[] > {
    return  new Promise((resolve) => {
        const categories =  this.categoryApi.findAll();
        resolve(categories);
    });

   }

}