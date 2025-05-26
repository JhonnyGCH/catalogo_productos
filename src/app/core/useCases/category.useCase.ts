import { Category } from "../domain/entities/category.entity";
import { CategoryRepositoryImpl } from "../infraestructure/repositories/category.repository.impl";

const categoryRepositoryImpl = new CategoryRepositoryImpl();
/**
 * Obtiene todas las categorias del repository 
 * @returns promise que se resuelve con array de categorias
 */
export async function getAllCategories(): Promise<Category[]> {
  return  await categoryRepositoryImpl.getAll();
}
