import { ProductoDto } from './producto.dto';

export interface SubCategoryDto {
  id: number;
  nombre: string;
  descripcion?: string;
  productos: ProductoDto[];
}
