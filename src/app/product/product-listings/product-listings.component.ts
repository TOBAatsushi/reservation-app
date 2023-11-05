import { Component } from '@angular/core';
import { Product, products } from '../../products';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss'],
})
export class ProductListingsComponent {
  products: Product[] = [...products];
  number: number = 5;
}
