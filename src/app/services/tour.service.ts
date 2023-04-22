import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  spots!: any;
  filtered!: any;

  async fetchData(country: string, heritagef: boolean): Promise<any> {
    console.log(country);

    if (!this.spots) {
      const fetching = await this.http.get("../../assets/data/touristSpot.json").toPromise();
      this.spots = fetching;
      console.log(this.spots);
    }

    if (country == "all") {
      console.log("first");
      if (heritagef) this.filtered = this.spots.filter((spot: any) => spot.heritage);
      else this.filtered = this.spots;
    } else {
      console.log("second");
      if (country == "India") this.filtered = this.spots.filter((spot: any) => spot.country == "India");
      else this.filtered = this.spots.filter((spot: any) => spot.country != "India");
    }


    return this.filtered;
  }

  constructor(private http: HttpClient) {}
}
