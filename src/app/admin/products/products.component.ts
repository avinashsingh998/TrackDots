import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products!:Product[];

  constructor(private _tourService : TourService) { }

  ngOnInit(): void {

    this._tourService.fetchProducts('all', false).then((data)=>{
      if(data) this.products = [...data];
      
    })
  }

}
