import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from '../app/pages/app/app.component'
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AuthentificateComponent } from './pages/authentificate/authentificate.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AuthentificateComponent,
    RegisterPageComponent,
    MainPageComponent,
    ArticlesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
