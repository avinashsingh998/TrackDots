import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'weatherIcon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.scss']
})
export class WeatherIconComponent implements OnInit {

  @Input() name!:string;


  

  data:{ [key: string]: string }  = {
    "Partly Cloudy":"cloudy.gif",
    "Mostly Sunny":"sunny.gif",
    "Haze":"sunset.gif",
    "Scattered Showers":"drizzle.gif",
    "Mostly Clear":"sun.gif",
    "Cloudy":"clouds.gif",
    "Mostly Cloudy":"clouds.gif",
    "Thunderstorms":"storm.gif",
    "Showers":"drop.gif",
    "Sunny":"hot.gif",
    "Hot":"hot.gif",
    "Fair":"wind.gif"
  }

  constructor() { }

  ngOnInit(): void {
   

  }

}
