import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { AboutComponent } from './components/about/about.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { InternationalTripComponent } from './components/international-trip/international-trip.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularmaterialModule } from '../angularmaterial/angularmaterial.module';
import { FarenheitToCelPipe } from '../pipes/farenheit-to-cel.pipe';
import { WeatherCardComponent } from '../utilityComponents/weather-card/weather-card.component';
import { WeatherIconComponent } from '../utilityComponents/weather-icon/weather-icon.component';


@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BlogsComponent,
    InternationalTripComponent,
    CartComponent,
    FeedbackComponent,
    WeatherIconComponent,
    WeatherCardComponent,
    FarenheitToCelPipe,
   
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularmaterialModule,
  ]
})
export class UserModule { }
