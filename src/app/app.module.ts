import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child01Component } from './child01/child01.component';
import { Child02Component } from './child02/child02.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import{MatFormFieldModule} from '@angular/material/form-field'
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import{NoopAnimationsModule} from '@angular/platform-browser/animations';
import { EmployeeComponent } from './employee/employee.component';
import{ MatTableModule} from '@angular/material/table'

@NgModule({
  declarations: [
    AppComponent,
    Child01Component,
    Child02Component,
    LoginComponent,
    HomeComponent,
    ProductComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    NoopAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
