import { Component } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/domain/entities/product.entity';
import { OrderMenuComponent } from "../../shared/components/order-menu/order-menu.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [OrderMenuComponent, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  productos: Product[] = [];
  constructor(private productService: ProductService) {
    // this.productos = productService.getProducts();
  }
  categoriesSelect(productos: Product[]) {
    console.log("productos", productos);
    
    this.productos = productos;
  }
}