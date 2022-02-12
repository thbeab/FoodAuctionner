import { Component, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormGroup, FormBuilder } from "@angular/forms";
export interface Subject {
  name: string;
}

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  myForm: FormGroup = this.fb.group({
    name: [''],
    email: [''],
    phone: [''],
    address: [''],
  });
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  constructor(public fb: FormBuilder) {}
  ngOnInit(): void {
    this.reactiveForm()
  }
  /* Reactive form */
  reactiveForm() {

  }
 

  submitForm() {
    console.log(this.myForm.value)
  }

}