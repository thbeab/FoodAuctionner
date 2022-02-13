import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AuthentificateComponent } from '../pages/authentificate/authentificate.component';
import { AccountComponent } from '../pages/account/account.component';
import { AuthentificateComponent } from '../pages/authentificate/authentificate.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { MainPageComponent } from '../pages/main-page/main-page.component';
import { RegisterPageComponent } from '../pages/register-page/register-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'authentificate', component: AuthentificateComponent },
  { path: 'register', component: RegisterPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

