import { Component, OnInit } from '@angular/core';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-domestic-pack',
  templateUrl: './domestic-pack.component.html',
  styleUrls: ['./domestic-pack.component.scss']
})
export class DomesticPackComponent implements OnInit {


  packages!:any[];
  constructor(private serv:TourService) { }

  ngOnInit(): void {
    this.serv.fetchProducts("other", false).then(dt => this.packages= dt);

  }

}
