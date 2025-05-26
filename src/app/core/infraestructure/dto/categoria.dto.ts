import { SubCategoryDto } from './subcategory.dto';

export interface CategoriaDto {
  id: number;
  nombre: string;
  descripcion?: string;
  subcategorias: SubCategoryDto[];
}
