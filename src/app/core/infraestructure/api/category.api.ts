import { CategoryMapper } from '../../application/mappers/category.mapper';
import { Category } from '../../domain/entities/category.entity';
import categoriesJson from '../../domain/seeds/category.seed.json';
import { CategoriaDto } from '../dto/categoria.dto';

export class CategoryApi {
  categories = categoriesJson;

  /**
   * Funcion para obtener todas las categorias
   * @returns las categorias
   */
  findAll(): Category[] {
    const response = JSON.parse(JSON.stringify(this.categories));
    return response.map(
      (categoriaDto: CategoriaDto): Category =>
        CategoryMapper.fromDto(categoriaDto)
    );
  }
}
