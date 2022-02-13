import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] =  [{
    name : "Pomme", timer : 30, category : "fruit", distance : 200, current : 0, isExpanded : false
  },
  {
    name : "Banane", timer : 24, category : "fruit", distance : 100, current : 23.5, isExpanded : false
  }
];

  constructor() { }

  addProduct(product:Product){
    this.products.push(product);
  }

  setPrice(productName: string, price: number){
    for(let i=0; i<this.products.length; i++){
      if(this.products[i].name == productName){
        if( price > this.products[i].current){
          this.products[i].current = price;
        }
      }
    }
  }
}
