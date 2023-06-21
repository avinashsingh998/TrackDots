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

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'blogs', component: BlogsComponent },
      {
        path: 'cart',
        component: CartComponent,
        canActivate: [AuthGuard],
        data: {
          scrollPositionRestoration: 'enabled',
        },
      },
      {
        path: 'feedback',
        component: FeedbackComponent,
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
