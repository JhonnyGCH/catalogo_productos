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
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  producto!: Product;

  productExtras = {
    thumbnails: [],
    detailImages: [],
  };

  selectedTab = 'specifications';
  selectedImageIndex = 0;

  constructor(private router: Router) {
    console.log(this.producto);

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
    return Array(5)
      .fill(0)
      .map((_, i) => i < rating);
  }

  getMainImage(): string {
    return this.producto?.image || '';
  }

  getThumbnails(): string[] {
    if (this.producto?.image) {
      return Array(4).fill(this.producto.image);
    }
    return this.productExtras.thumbnails;
  }
  getDetailImages(): string[] {
    if (this.producto?.image) {
      return Array(2).fill(this.producto.image);
    }
    return this.productExtras.detailImages;
  }
}
