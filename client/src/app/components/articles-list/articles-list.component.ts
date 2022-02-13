import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { ProductsService } from 'src/app/services/products/products.service';

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
  constructor(private productsService : ProductsService) { }
  
  ngOnInit(): void {
  }

  setPrice(price: number, name: string)
  {

    this.productsService.setPrice(price, name);
  }


  get articles()
  {
    return this._articles;
  }

  
}

