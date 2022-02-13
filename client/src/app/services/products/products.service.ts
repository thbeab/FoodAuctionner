import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [];

  constructor() { }

  addProduct(product:Product){
    this.products.push(product);
  }
}
