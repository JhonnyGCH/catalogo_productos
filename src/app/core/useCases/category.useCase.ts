import { Category } from "../domain/entities/category.entity";
import { CategoryRepositoryImpl } from "../infraestructure/repositories/category.repository.impl";

const categoryRepositoryImpl = new CategoryRepositoryImpl();
export async function getAllCategories(): Promise<Category[]> {
  return  await categoryRepositoryImpl.getAll();
}
export async function getCategoryById(id: number): Promise<Category | null> {
  return await categoryRepositoryImpl.findById(id);
}
export async function createCategory(category: Category): Promise<Category> {
  return await categoryRepositoryImpl.create(category);
}
export async function updateCategory( category: Category): Promise<Category | null> {
  return await categoryRepositoryImpl.update(category);
}
export async function deleteCategory(id: number): Promise<boolean> {
  return await categoryRepositoryImpl.delete(id);
}
