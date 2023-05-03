import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { InternationalTripComponent } from './components/international-trip/international-trip.component';
import { CartComponent } from './components/cart/cart.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AuthGuard } from './gaurds/auth.guard';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'blogs', component:BlogsComponent},
  {path:'cart', component:CartComponent, canActivate:[AuthGuard], data: {
    scrollPositionRestoration: 'enabled'
  }},
  {path:'feedback', component:FeedbackComponent,data: {
    scrollPositionRestoration: 'enabled'
  }},
  
  {path:'package', 
    children:[
      {
        path:"international", component:InternationalTripComponent
      }
    ]
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {
    scrollPositionRestoration: 'top'
  }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
