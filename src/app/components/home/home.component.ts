import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  search!:string;
  active:string = "active";

  carsoulItems = [
    {"title": "Explore the Beaches of Hawaii", "description": "Discover the golden sands and crystal-clear waters of Hawaii's best beaches. Book your dream vacation now!"},
    {"title": "Discover the Wonders of Paris", "description": "Experience the romance, culture, and history of the City of Light. Plan your Parisian adventure today."},
    {"title": "Adventure Awaits in New Zealand", "description": "Discover the rugged beauty of New Zealand's landscapes and experience thrilling outdoor activities. Plan your trip now."},
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
