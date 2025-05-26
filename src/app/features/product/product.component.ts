import { Component } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/domain/entities/product.entity';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface ProductSpec {
  label: string;
  value: string;
}

@Component({
  selector: 'app-product',
  imports: [ CommonModule, ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  producto!: Product;

  
  productExtras = {
    storage: '64GB, 4GB RAM',
    discount: 40,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco...',
    thumbnails: [
      
    ],
    detailImages: [
      
    ]
  };

  specifications: ProductSpec[] = [
    { label: 'Fabricante', value: 'Sample' },
    { label: 'Peso del producto', value: '50 gr' },
    { label: 'Dimensiones', value: '11 x 10 x 0.4 pulgadas' },
    { label: 'País de Origen', value: 'China' },
    { label: 'Número de modelo', value: '134687' },
    { label: 'Color', value: 'Plata' },
    { label: 'Material', value: 'Silicona plástico' },
    { label: 'Cantidad de piezas', value: '4' },
    { label: 'Características especiales', value: 'Resistente al agua' },
    { label: 'Componentes incluidos', value: 'Audífonos, Cargador y Manual de usuario' }
  ];

  selectedTab = 'specifications';
  selectedImageIndex = 0;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.producto = nav?.extras.state?.['producto'];
    if (!this.producto) {
      this.backToHome();
    }
  }
  backToHome() {
    this.router.navigate(['/']);
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  selectImage(index: number) {
    this.selectedImageIndex = index;
  }

  getStars() {
    const rating = this.producto?.stars || 0;
    return Array(5).fill(0).map((_, i) => i < rating);
  }

  getMainImage(): string {
    return this.producto?.image || this.productExtras.thumbnails[this.selectedImageIndex];
  }

  getThumbnails(): string[] {
    if (this.producto?.image) {
      return [this.producto.image, ...this.productExtras.thumbnails.slice(1)];
    }
    return this.productExtras.thumbnails;
  }
}