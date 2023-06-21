import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourService } from 'src/app/services/tour.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { WeatherService } from 'src/app/services/weather.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  id!: any;
  object!: any;
  foodPrice: number = 0;
  explorePrice: number = 0;
  maleCount: number = 1;
  femaleCount: number = 0;
  totalPrice: number = 25000 + 2500;
  bookings!:any;

  weatherInfo!:any;

  map_url!: SafeResourceUrl;

  latitude! : string;
  longitude! : string;
  latLngPattern = /!3d(-?\d+\.\d+)!2m3!1f/;
  lngPattern = /!2d(-?\d+\.\d+)/;



  constructor(
    private route: ActivatedRoute,
    private serv: TourService,
    private sanitizer: DomSanitizer,
    private _cartService:CartService,
    private _weatherService:WeatherService
  ) {}

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log(this.weatherInfo)
    // }, 9000);

    this.bookings = this._cartService.bookings;
    this.route.queryParamMap.subscribe((params) => {
      this.id = params.get('id');
    });

    if (this.id != null) {
      // console.log(this.id);

      this.serv.getObjectById(this.id).then((dt) => {
        this.object = dt;
        console.log("ljjkhgf",this.object)
        this.longitude = this.object.map_link.match(this.latLngPattern);
        this.latitude = this.object.map_link.match(this.lngPattern);

        this.weatherInfo = {"location":{"city":"Yanqing","region":"Beijing","woeid":2151283,"country":"China","lat":40.454208,"long":115.958023,"timezone_id":"Asia/Shanghai"},"current_observation":{"pubDate":1682598445,"wind":{"chill":52,"direction":"WNW","speed":5},"atmosphere":{"humidity":77,"visibility":6.03,"pressure":1008.1},"astronomy":{"sunrise":"5:20 AM","sunset":"7:08 PM"},"condition":{"temperature":55,"text":"Cloudy","code":26}},"forecasts":[{"day":"Thu","date":1682611200,"high":70,"low":48,"text":"Mostly Clear","code":33},{"day":"Fri","date":1682697600,"high":73,"low":45,"text":"Partly Cloudy","code":30},{"day":"Sat","date":1682784000,"high":73,"low":45,"text":"Partly Cloudy","code":30},{"day":"Sun","date":1682870400,"high":77,"low":48,"text":"Partly Cloudy","code":30},{"day":"Mon","date":1682956800,"high":75,"low":52,"text":"Partly Cloudy","code":30},{"day":"Tue","date":1683043200,"high":75,"low":50,"text":"Mostly Cloudy","code":28},{"day":"Wed","date":1683129600,"high":75,"low":52,"text":"Cloudy","code":26},{"day":"Thu","date":1683216000,"high":77,"low":54,"text":"Mostly Cloudy","code":28},{"day":"Fri","date":1683302400,"high":73,"low":55,"text":"Cloudy","code":26},{"day":"Sat","date":1683388800,"high":63,"low":48,"text":"Cloudy","code":26},{"day":"Sun","date":1683475200,"high":73,"low":50,"text":"Cloudy","code":26}]}
        
        
        
        
        // this._weatherService.getWeatherInfo(this.longitude[1], this.latitude[1]).then((data:any)=>{
        //   console.log("this is data from ts file "+data)
        //     this.weatherInfo = JSON.parse(data);

        //     console.log("this is weather info from ts file with timeout"+this.weatherInfo);
        //     setTimeout(() => {
        //       console.log("this is weatherinfo from ts file after 3 seconds " +this.weatherInfo)
        //     }, 3000);
          
        // })
    
     console.log(this.latitude[1]+", "+this.longitude[1])
        this.map_url = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.object.map_link
        );
      });
    } else this.object = undefined;



    
   
  }

  

  update() {
    if ($('#addfood')?.prop('checked')) {
      this.foodPrice = 3000;
    } else this.foodPrice = 0;

    if ($('#explorearea')?.prop('checked')) {
      this.explorePrice = 7000;
    } else this.explorePrice = 0;

    this.maleCount = Number($('#maletourist').val());
    this.femaleCount = Number($('#femaletourist').val());

    this.totalPrice = 25000 + this.foodPrice + this.explorePrice;
  }

  removePackage(ind:any){

    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this package!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this._cartService.removeItem(ind);
        Swal.fire({
        title: 'Deleted!',
        text: 'Your item has been deleted.',
        icon: 'success',
        timer: 1200,
        showConfirmButton: true
      });
      }
    })

   

  }



  submit(myTourForm:NgForm) {
    if(this.maleCount+this.femaleCount <1) {
      Swal.fire("Alert!","Select atleast one tourist..","warning")
    }
    else if (!myTourForm.value.date) {
      Swal.fire("Alert!","Select a date....","warning")
    }
    else{
      this._cartService.addItem({
        "price":{
        "food":this.foodPrice,
        "basic":25000,
        "other":this.explorePrice,
        "gst":this.totalPrice*.24,
        "othertax":this.totalPrice*.03,
        },
        "pricetotal":(this.maleCount+this.femaleCount)*(this.totalPrice)*1.27,

        "package":this.object,
        "date":myTourForm.value.date,
        "maleCount":this.maleCount,
        "femaleCount":this.femaleCount


      })
      
        this.id = undefined;
        this.object = undefined;
        Swal.fire("Added","One Package added to the cart","success")
    }
  }



  canclePackage(){
    this.object = undefined;
  }


  
  
}
