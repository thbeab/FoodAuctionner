import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user: User = {
    name:"",
    email:"",
    phone:"",
    address:""
  };

  constructor() { }

  set user(user: User){
    this._user=user;
  }

  get user(){
    return this._user;
  }
}
