import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TourService } from 'src/app/services/tour.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  search!:string;
  active:string = "active";
  products!:any[];
  options!:any[];
  object!:any;

  imageCount:number[]=[2,2,2]

  carsoulItems = [
    {"title": "Explore the Beaches of Hawaii", "description": "Discover the golden sands and crystal-clear waters of Hawaii's best beaches. Book your dream vacation now!"},
    {"title": "Discover the Wonders of Paris", "description": "Experience the romance, culture, and history of the City of Light. Plan your Parisian adventure today."},
    {"title": "Adventure Awaits in New Zealand", "description": "Discover the rugged beauty of New Zealand's landscapes and experience thrilling outdoor activities. Plan your trip now."},
    ]

  constructor(private _tourService : TourService, private router:Router) { }

  ngOnInit(): void {

    this._tourService.fetchData('all',false).then((data)=>{
      this.products = data;
      this.options = data;
      
    })

    const inputElement = document.querySelector('input');
    const autoCompleteElement:any = document.querySelector('.autoComplete');

    inputElement?.addEventListener('focus', () => {
 
    
      if (autoCompleteElement) 
        autoCompleteElement.style.display = 'block';
      });
      inputElement?.addEventListener('blur', () => {
 
    
        if (autoCompleteElement) 
         setTimeout(() => {
          autoCompleteElement.style = 'none';
         }, 300);
        });

  }

  searchTour(){
    if(this.object){
      this.router.navigate(['/cart'], { queryParams: { id: this.object.id } });
    } 
    else{
     
      if(this.options.length>0 && this.search!=''){
        this.router.navigate(['/cart'], { queryParams: { id:  this.options[0].id } });      }
      else{
        Swal.fire("Sorry","Location not found", "error")
      }
    }
  }

  setValue(ind:any){
    this.search = this.options[ind].name;
    
    this.object = this.options[ind];
    this.searchTour();
  }

  updateOptions(){
    // console.log("Updated")

    this.options = this.products.filter((obj:any)=>{
      return obj.name.toLowerCase().includes(this.search?.toLowerCase()|| '')
    })
    // console.log(this.options)
  }

  flipImages(sel:any, index:any){

  //  const selector:any= ".third .card-container .card1:nth-child("+index.toString()+") img";
   let images = $("#"+sel +" img");

   let top = this.imageCount[index];
   let last = (top+1)%3;
   let middle = (top+2)%3;
   this.imageCount[index] = middle;
   images.eq(top).removeClass();
   images.eq(top).addClass("firstanim");
   setTimeout(()=>   images.eq(top).addClass("firstProp"),800
   )

   setTimeout(()=>   {
    images.eq(middle).addClass("secondanim")
    images.eq(middle).removeClass();
   }
,200   )
   setTimeout(()=>
   images.eq(middle).addClass("secondProp"), 800)

   setTimeout(()=>   {
    images.eq(last).addClass("thirdanim");
    images.eq(last).removeClass();
   },100   )
   setTimeout(()=>images.eq(last).addClass("thirdProp"),800)



  }

}
