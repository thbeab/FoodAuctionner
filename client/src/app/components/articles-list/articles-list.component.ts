import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  private _articles: Product[] = [{
    name : "Apple", timer : 30, category : "fruit", distance : 10, current : 0
  }];
  columnsToDisplay = ['name', 'timer', 'category', 'distance', 'current price'];
  constructor() { }
  
  ngOnInit(): void {
  }
  get articles()
  {
    return this._articles;
  }
  
}
