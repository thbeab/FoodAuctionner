import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from 'src/app/services/user.service';
import { Router, RouterModule } from '@angular/router';

export interface Subject {
  name: string;
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    address: ['', [Validators.required]],
  });
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  constructor(public fb: FormBuilder, private user: UserService, private router: Router) {}
  ngOnInit(): void {
    this.reactiveForm()
  }
  /* Reactive form */
  reactiveForm() {

  }

  submitForm() {
    this.user = this.myForm.value;
    console.log(this.user);
    this.router.navigate(["/main"])
  }

}
