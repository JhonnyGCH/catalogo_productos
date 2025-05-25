import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { CategoryService } from '../../../core/services/category.service';
import { Category } from '../../../core/domain/entities/category.entity';
import { Product } from '../../../core/domain/entities/product.entity';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-order-menu',
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  templateUrl: './order-menu.component.html',
  styleUrl: './order-menu.component.css',
})
export class OrderMenuComponent {
  @Output() categoriesSelect = new EventEmitter<Product[]>();
  categories: Category[] = [];
  selectedCategories: Category[] = [];
  orders: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  constructor(private categoryService: CategoryService) {}
  ngOnInit() {
    this.getAllCategories();
  }
  async getAllCategories() {
    this.categories = await this.categoryService.getAllCategories();

    const allProductsMap = new Map<number, Product>();
    this.categories.forEach((cat) => {
      cat.products.forEach((product) => {
        allProductsMap.set(product.id, product);
      });
    });

    const allProducts = Array.from(allProductsMap.values());
    this.categoriesSelect.emit(allProducts);
  }
  categorySelected(event: Event, category: Category) {
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.selectedCategories.push(category);
    } else {
      this.selectedCategories = this.selectedCategories.filter(
        (c) => c.id !== category.id
      );
    }

    let allSelectedProducts: Product[] = [];

    if (this.selectedCategories.length === 0) {
      const allProductsMap = new Map<number, Product>();
      this.categories.forEach((cat) => {
        cat.products.forEach((product) => {
          allProductsMap.set(product.id, product);
        });
      });
      allSelectedProducts = Array.from(allProductsMap.values());
    } else {
      const selectedMap = new Map<number, Product>();
      this.selectedCategories.forEach((cat) => {
        cat.products.forEach((product) => {
          selectedMap.set(product.id, product);
        });
      });
      allSelectedProducts = Array.from(selectedMap.values());
    }

    this.categoriesSelect.emit(allSelectedProducts);
  }
}
