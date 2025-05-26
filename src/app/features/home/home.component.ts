import { Component } from '@angular/core';
import { Product } from '../../core/domain/entities/product.entity';
import { OrderMenuComponent } from '../../shared/components/order-menu/order-menu.component';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from '../../shared/components/star-rating/star-rating.component';
import { SearchBarComponent } from '../../shared/components/search-bar/search-bar.component';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [OrderMenuComponent, CommonModule, StarRatingComponent, MatIcon],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  productos: Product[] = [];
  selectedProduct: Product | null = null;

  constructor(private router: Router) {}
  subCategoriesSelect(productos: Product[]) {
    console.log(productos);
    
    this.productos = productos;
  }

  openModal(product: Product) {
    this.selectedProduct = product;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedProduct = null;
    document.body.style.overflow = 'unset';
  }

  /**
   * Muestra la vista de detalles del producto seleccionado
   * @param producto product seleccionado
   */
  showProduct(producto: Product) {
  this.router.navigate(['/products'], { state: { producto } });
}
  /**
   * Se cierra la modal si se hace click fuera de esta
   * @param event evento de hacer click fuera del modal
   */
  onOverlayClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }
}
