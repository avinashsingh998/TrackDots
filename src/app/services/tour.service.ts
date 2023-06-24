import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class TourService {
  spots!: any;
  filtered!: any; //This variable is for storing filtered spots for displaying on frontend
  private apiUrl = environment.apiURL+'user/';



  //Getting a single tourist spot using object Id


   async getObjectById(id:string): Promise<any> {
    // console.log(this.spots)
    if (!this.spots) {
      const fetching = await this.http.get(this.apiUrl+"packages").toPromise();
      this.spots = fetching;
      // console.log(this.spots);
    }

    return  this.spots.find((spot: any) => spot._id == id);
    

  }


  //Fetch all products from backend

  async fetchProducts(country: string, heritagef: boolean): Promise<any> {
    // console.log(country);

    if (!this.spots) {
      const fetching = await this.http.get(this.apiUrl+"packages").toPromise();
      this.spots = fetching;
      // console.log(this.spots);
    }

    if (country == "all") {
      // console.log("first");
      if (heritagef) this.filtered = this.spots.filter((spot: any) => spot.heritage);
      else this.filtered = this.spots;
    } else {
      // console.log("second");
      if (country == "India") this.filtered = this.spots.filter((spot: any) => spot.country == "India");
      else this.filtered = this.spots.filter((spot: any) => spot.country != "India");
    }


    return this.filtered;
  }



  constructor(private http: HttpClient) {}
}
