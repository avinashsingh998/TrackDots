import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import * as $ from 'jquery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { InternationalTripComponent } from './components/international-trip/international-trip.component';





import{AngularmaterialModule} from './angularmaterial/angularmaterial.module';
import { CartComponent } from './components/cart/cart.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AuthGuard } from './gaurds/auth.guard';

import { WeatherIconComponent } from './utilityComponents/weather-icon/weather-icon.component';
import { WeatherCardComponent } from './utilityComponents/weather-card/weather-card.component';
import { FarenheitToCelPipe } from './pipes/farenheit-to-cel.pipe';
import { DateTimeComponent } from './utilityComponents/date-time/date-time.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
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
    DateTimeComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularmaterialModule
    

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
