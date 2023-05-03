import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'weatherCard',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  @Input() object!:any;
  @Input() index!:any;

  constructor() { }

  ngOnInit(): void {
  }

}
