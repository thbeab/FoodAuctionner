import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

  constructor(private products: ProductsService, private fb: FormBuilder, private router:Router) { }

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    timer: [0, [Validators.required]],
    category: ['', [Validators.required]],
    distance: [0, [Validators.required]],
  });

  ngOnInit(): void {
  }
  
  onSubmit(){
    this.products.addProduct({
      name: this.myForm.value.name,
      timer: this.myForm.value.timer,
      category: this.myForm.value.category,
      distance: this.myForm.value.distance,
      current: 0,
      isExpanded: false,
    })
    this.router.navigate(['/main']);
  }
}
