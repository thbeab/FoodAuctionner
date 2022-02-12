import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AuthentificateComponent } from '../pages/authentificate/authentificate.component';
import { AccountComponent } from '../pages/account/account.component';
import { AuthentificateComponent } from '../pages/authentificate/authentificate.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
//import { AccountComponent } from '../pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'account', component: AccountComponent },
  { path: 'authentificate', component: AuthentificateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

