import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: AdminComponent,
  children :[
    {path:'', component:LoginComponent},
    {path:'dashboard', component:DashboardComponent},
    {path:'orders', component:OrdersComponent},
    {path:'products', component:ProductsComponent},
    {path:'customers', component:CustomersComponent},
    {path:'profile', component:ProfileComponent},
    
  ]


}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
