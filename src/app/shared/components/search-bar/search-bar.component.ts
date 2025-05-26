/**
 * SearchBarComponent
 * Componente de barra de búsqueda reutilizable que permite:
 * - Buscar productos por término
 * - Filtrar por categorías (con subcategorías asociadas)
 * - Cargar categorías desde la API o cookies
 * - Emitir eventos al componente padre para manejar búsqueda, cambio de categoría y subcategorías seleccionadas
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import  { CookieService }  from  'ngx-cookie-service' ;
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SubCategory } from '../../../core/domain/entities/subcategory.entity';
import { CategoryService } from '../../../core/services/category.service';
import { Category } from '../../../core/domain/entities/category.entity';
import { Product } from '../../../core/domain/entities/product.entity';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
  providers: [CookieService],
})
export class SearchBarComponent {
  /**
   * Placeholder del campo de búsqueda
   */
  @Input() placeholder: string = 'Encuentra el producto que necesitas';

  /**
   * Categorías cargadas desde el backend o cookies
   */
  categories: Category[] = [];

  /**
   * Nombres de las categorías para mostrar en el dropdown
   */
  categoriesNames: string[] = [];

  /**
   * Evento que emite el término de búsqueda al componente padre
   */
  @Output() searchEvent = new EventEmitter<string>();

  /**
   * Evento que emite la categoría seleccionada
   */
  @Output() categoryChange = new EventEmitter<string>();

  /**
   * Evento emitido cuando se presiona "Enter"
   */
  @Output() enterPressed = new EventEmitter<string>();

  /**
   * Evento que emite las subcategorías relacionadas a la categoría seleccionada
   */
  @Output() categoriesSelect = new EventEmitter<SubCategory[]>();

  /**
   * Término de búsqueda actual
   */
  searchTerm: string = '';

  /**
   * Categoría actualmente seleccionada
   */
  selectedCategory: string = 'Todas las Categorías';

  /**
   * Control del estado del dropdown de categorías
   */
  isDropdownOpen: boolean = false;
  constructor(private categoryService: CategoryService, private cookieService: CookieService) {
    this.cookieService = cookieService;
    this.categoryDrop()
   
  }
  ngOnInit() {
    this.getAllCategories();
  }
 /**
   * Inicializa la lógica para cerrar el dropdown al hacer clic fuera de él
   */
   categoryDrop(){
     document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.category-dropdown')) {
        this.isDropdownOpen = false;
      }
    });
   }
   /**
   * Guarda las categorías en una cookie con duración de 1 minuto
   * @param categories Categorías a guardar
   */
   saveCategoriesToCookie(categories: Category[]) {
    this.cookieService.set('categories', JSON.stringify(categories), 1 / (24 * 60));
  }
   /**
   * Recupera las categorías almacenadas en la cookie
   * @returns Lista de categorías o null
   */
  async getCategoriesCookie() {
    const categoriesJson = this.cookieService.get('categories');
    return categoriesJson ?await JSON.parse(categoriesJson) : null;
  }
    /**
   * Obtiene todas las categorías desde cookies o API
   * Emite las subcategorías disponibles
   */
  async getAllCategories() {
    if(!this.cookieService.check('categories')) {
      this.categories = await this.categoryService.getAllCategories();
      this.saveCategoriesToCookie(this.categories);
    }else{
      this.categories = await this.getCategoriesCookie();
    }

    if (!this.categories || this.categories.length === 0) {
      this.categories = await this.categoryService.getAllCategories();
      this.saveCategoriesToCookie(this.categories);
    }

    const allSubMap = new Map<string, SubCategory>();
    this.categories.forEach((cat) => {
      this.categoriesNames.push(cat.name);
      cat.children?.forEach((subcat) => {
        const key = `${cat.id}-${subcat.id}`;
        allSubMap.set(key, subcat);
      });
    });

    const allSub = Array.from(allSubMap.values());
    this.categoriesSelect.emit(allSub);
  }

  /**
   * Emite el término de búsqueda
   */
  search() {
    this.searchEvent.emit(this.searchTerm);
  }

  /**
   * Emite el término cuando se presiona "Enter"
   */
  enterPress(): void {
    this.enterPressed.emit(this.searchTerm);
  }

  /**
   * Alterna el estado del dropdown de categorías
   */
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

    /**
   * Cambia la categoría seleccionada y emite sus subcategorías
   * @param category Categoría seleccionada
   */
    selectCategory(category: Category): void {
      this.selectedCategory = category.name;
      this.isDropdownOpen = false;
  
      const allSubMap = new Map<string, SubCategory>();
      category.children?.forEach((subcat) => {
        const key = `${category.id}-${subcat.id}`;
        allSubMap.set(key, subcat);
      });
  
      this.searchTerm = '';
      const allSub = Array.from(allSubMap.values());
      this.categoriesSelect.emit(allSub);
    }
  
    /**
     * Muestra todas las subcategorías disponibles sin filtrar por categoría
     */
    showAllCategories(): void {
      this.selectedCategory = 'Todas las Categorías';
      this.isDropdownOpen = false;
  
      const allSubMap = new Map<string, SubCategory>();
      this.categoriesNames = [];
  
      this.categories.forEach((cat) => {
        this.categoriesNames.push(cat.name);
        cat.children?.forEach((subcat) => {
          const key = `${cat.id}-${subcat.id}`;
          allSubMap.set(key, subcat);
        });
      });
  
      const allSub = Array.from(allSubMap.values());
      this.categoriesSelect.emit(allSub);
    }
}
