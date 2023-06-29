import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from '../gaurds/auth.guard';
import { AboutComponent } from './components/about/about.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { InternationalTripComponent } from './components/international-trip/international-trip.component';
import { DomesticPackComponent } from './components/domestic-pack/domestic-pack.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserGaurdGuard } from '../gaurds/user-gaurd.guard';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', canActivate:[UserGaurdGuard], component: ContactComponent },
      { path: 'blogs', component: BlogsComponent },
      { path:'register', component:RegisterComponent, data:{scrollPositionRestoration:'enabled'}},
      { path:'login', component:LoginComponent, data:{scrollPositionRestoration:'enabled'}},
      {
        path: 'cart',
        component: CartComponent,
        canActivate: [AuthGuard, UserGaurdGuard],
        data: {
          scrollPositionRestoration: 'enabled',
        },
      },
      {
        path: 'feedback',
        component: FeedbackComponent,
        canActivate:[UserGaurdGuard],
        data: {
          scrollPositionRestoration: 'enabled',
        },
      },

      {
        path: 'package',
        children: [
          {path: 'international', component: InternationalTripComponent},
          {path:"domestic", component: DomesticPackComponent}
        ],
      },

      {path:"profile", component:ProfileComponent, canActivate:[UserGaurdGuard]}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
