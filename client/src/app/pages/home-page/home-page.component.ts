import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  changementDePage() {
   this.router.navigate(['https://www.tutorialspoint.com/angular8/angular8_authentication_and_authorization.htm']);
  };
}

