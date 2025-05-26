/**
 * OrderMenuComponent
 *
 * Componente que permite aplicar filtros a los productos mostrados:
 * - Búsqueda por nombre
 * - Filtro por subcategorías seleccionadas
 * - Filtro por precio mínimo/máximo
 * - Filtro por calificación (estrellas)
 *
 * Emite los productos filtrados al componente padre.
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoryService } from '../../../core/services/category.service';
import { Category } from '../../../core/domain/entities/category.entity';
import { Product } from '../../../core/domain/entities/product.entity';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { SubCategory } from '../../../core/domain/entities/subcategory.entity';

@Component({
  selector: 'app-order-menu',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    StarRatingComponent,
    SearchBarComponent,
  ],
  templateUrl: './order-menu.component.html',
  styleUrl: './order-menu.component.css',
})
export class OrderMenuComponent {
  /**
   * Emite los productos filtrados al componente padre
   */
  @Output() subCategoriesSelect = new EventEmitter<Product[]>();

  /**
   * Opciones de ordenamiento disponibles
   */
  orders: any[] = [{ value: '0', viewValue: 'Mejores reviews' }];

  /**
   * Precio mínimo seleccionado por el usuario
   */
  minPrice: number | null = null;

  /**
   * Precio máximo seleccionado por el usuario
   */
  maxPrice: number | null = null;

  /**
   * Lista de subcategorías recibidas desde el componente padre
   */
  subCategories: SubCategory[] = [];

  /**
   * Subcategorías seleccionadas manualmente por el usuario
   */
  selectedCategories: SubCategory[] = [];

  /**
   * Calificación (estrellas) seleccionada
   */
  currentRating: number = 0;

  /**
   * Maneja el evento emitido por el SearchBarComponent al seleccionar una categoría.
   * @param subs Subcategorías asociadas a la categoría seleccionada
   */
  categoriesSelect(subs: SubCategory[]): void {
    this.subCategories = subs;
    this.subCategoriesSelect.emit(this.filterProducts());
  }

  /**
   * Filtra los productos de las subcategorías activas según:
   * - categoría seleccionada
   * - precio mínimo/máximo
   * - calificación
   * @returns Lista de productos que cumplen los criterios
   */
  private filterProducts(): Product[] {
    const source =
      this.selectedCategories.length > 0
        ? this.selectedCategories
        : this.subCategories;

    const productMap = new Map<string, Product>();

    source.forEach((subcat) => {
      subcat.products?.forEach((product) => {
        const ratingMatch =
          this.currentRating === 0 ||
          (product.stars ?? 0) === this.currentRating;

        const priceMinMatch =
          this.minPrice != null ? product.price >= this.minPrice : true;

        const priceMaxMatch =
          this.maxPrice != null ? product.price <= this.maxPrice : true;

        if (ratingMatch && priceMinMatch && priceMaxMatch) {
          const key = `${subcat.id}-${product.id}`;
          productMap.set(key, product);
        }
      });
    });

    return Array.from(productMap.values());
  }

  /**
   * Maneja la selección (o deselección) de una subcategoría desde el checkbox
   * @param event Evento del input checkbox
   * @param category Subcategoría asociada
   */
  categorySelected(event: Event, category: SubCategory): void {
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.selectedCategories.push(category);
    } else {
      this.selectedCategories = this.selectedCategories.filter(
        (c) => c.id !== category.id
      );
    }

    this.subCategoriesSelect.emit(this.filterProducts());
  }

  /**
   * Maneja la selección de una calificación (estrellas)
   * @param rating Valor de la calificación seleccionada
   */
  ratingSelected(rating: number): void {
    this.currentRating = rating;
    this.subCategoriesSelect.emit(this.filterProducts());
  }

  /**
   * Maneja el cambio en el precio mínimo o máximo
   */
  priceSelected(): void {
    this.subCategoriesSelect.emit(this.filterProducts());
  }

  /**
   * Realiza la búsqueda de productos por nombre
   * @param term Término de búsqueda
   */
  search(term: string): void {
    const normalizedTerm = term.trim().toLowerCase();

    const source =
      this.selectedCategories.length > 0
        ? this.selectedCategories
        : this.subCategories;

    const matchedProducts: Product[] = [];

    source.forEach((subcat) => {
      subcat.products?.forEach((product) => {
        if (product.name?.toLowerCase().includes(normalizedTerm)) {
          matchedProducts.push(product);
        }
      });
    });

    this.subCategoriesSelect.emit(matchedProducts);
  }
}
