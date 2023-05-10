import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  itemCount!:number;

  constructor(private _cartService : CartService) { }

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  ngOnInit(): void {

    this._cartService.getBookingCount().subscribe((data)=>{
      this.itemCount = data;
      // console.log("this is the data "+ data)
    })

    this._cartService.updateValue();


    document.addEventListener('click', function(event) {
     
      if (event.target !== document.getElementById("navbar1") && event.target != document.getElementById("toogleSidebar1")  && event.target != document.getElementById("toogleSidebar2") ) {
        setTimeout(()=>$("nav").removeClass('open'),50)
        // console.log("called")
      }

      if (event.target != document.getElementById("toogleSidebar2") ) {
        setTimeout(()=>$(".custDD").slideUp(400),50)
        // console.log("called")
      }


    });
    

    
  }

  toggleSidebar(){
    $("nav").toggleClass('open');

    

  }

  toogleDD(){
    $(".custDD").slideToggle(400);
  }


 
  
  
}
