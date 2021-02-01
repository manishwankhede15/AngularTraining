import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { ProductModule } from './product/product.module';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {
		path: '',component:LoginComponent
  },
  {
		path: 'home',component:HomeComponent
    //loadChildren:'./home/home.module#HomeModule'
  },
  {
		path: 'product',component:ProductComponent
    //loadChildren:'./product/product.module#ProductModule'
  },
  {
    path:'employee',component:EmployeeComponent
  }
];

@NgModule({
  imports: [
    LoginModule,
    ProductModule,
    HomeModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
