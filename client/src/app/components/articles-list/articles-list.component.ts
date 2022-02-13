import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { ProductsService } from 'src/app/services/products/products.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  animations: [
    trigger('detailExpand', [
        state('collapsed', style({height: '0px', minHeight: '0'})),
        state('expanded', style({height: '*'})),
        transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
],
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  private _articles: Product[] = [{
    name : "Pomme", timer : 30, category : "fruit", distance : 200, current : 0, isExpanded : false
  },
  {
    name : "Banane", timer : 24, category : "fruit", distance : 100, current : 23.5, isExpanded : false
  }
];
  columnsToDisplay = ['name', 'timer', 'category', 'distance', 'current-price', 'actions'];

  form: FormGroup = this.fb.group({
    price: [0, [Validators.required]],
  }
  );

  constructor(private products: ProductsService, private fb: FormBuilder) { }
  
  ngOnInit(): void {
  }

  setPrice(price: number, name: string)
  {

    this.products.setPrice(name, price);
  }

  get articles()
  {
    return this.products.products;
  }

  onSubmit(product: string): void {
    this.products.setPrice(product, this.form.value.price);
  }
}

