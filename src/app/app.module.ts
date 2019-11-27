import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { FilterPipeModule } from 'ngx-filter-pipe';
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

//services
import { BlogService } from "./services/blog.service";

import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DetalheComponent } from './detalhe/detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    NgxSpinnerModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,      
    HttpClientJsonpModule,
    FilterPipeModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
