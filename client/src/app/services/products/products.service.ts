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
  setPrice(price : number, name : string)
  {
    for (let i =0; i < this.products.length; i++)
    {
      if(this.products[i].name == name)
      {
        if (this.products[i].current < price)
        {
          this.products[i].current = price;
        }
      }
    }
  }
}
