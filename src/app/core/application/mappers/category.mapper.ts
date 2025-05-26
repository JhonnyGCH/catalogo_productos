import { Category } from "../../domain/entities/category.entity";
import { Product } from "../../domain/entities/product.entity";
import { SubCategory } from "../../domain/entities/subcategory.entity";
import { CategoriaDto } from "../../infraestructure/dto/categoria.dto";

export class CategoryMapper {
/**
 * Funcion para mapear una CategoriaDto a un Category entity simulando un backend y luego enviando al frontend
 * @param dto la categoria que va ser mapeada
 * @returns la categoria mapeada lista para usar en el front
 */

    static fromDto(dto: CategoriaDto): Category {
      
      const subcategorias = dto.subcategorias.map((child)=>{
        return new SubCategory(
          child.id,
          child.nombre,
          child.descripcion,
          child.productos.map(p => new Product(p.id, p.nombre, p.precio, p.cantidad, p.estrellas ?? 0, p.imagen))
        )
      });
      
      return new Category(
        dto.id,
        dto.nombre,
        dto.descripcion,
        subcategorias
      )
  
    }
  
  }