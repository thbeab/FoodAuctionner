import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from '../app/pages/app/app.component'
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AccountComponent } from './pages/account/account.component';
import { AuthentificateComponent } from './pages/authentificate/authentificate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AccountComponent,
    AuthentificateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
