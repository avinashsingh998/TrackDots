import { Component, OnInit } from '@angular/core';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-international-trip',
  templateUrl: './international-trip.component.html',
  styleUrls: ['./international-trip.component.scss']
})
export class InternationalTripComponent implements OnInit {

  data:any;

  constructor(private serv:TourService) { }

  ngOnInit(): void {
     this.serv.fetchData("other", false).then(dt => this.data= dt);

    console.log(this.data)


  }

}
