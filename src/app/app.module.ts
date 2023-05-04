import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import * as $ from 'jquery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';






import{AngularmaterialModule} from './angularmaterial/angularmaterial.module';
import { AuthGuard } from './gaurds/auth.guard';

import { WeatherIconComponent } from './utilityComponents/weather-icon/weather-icon.component';
import { WeatherCardComponent } from './utilityComponents/weather-card/weather-card.component';
import { FarenheitToCelPipe } from './pipes/farenheit-to-cel.pipe';
import { DateTimeComponent } from './utilityComponents/date-time/date-time.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
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
