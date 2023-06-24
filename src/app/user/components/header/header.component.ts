import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ActiveCredentialsService } from 'src/app/services/active-credentials.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  itemCount!:number;

  constructor(private _cartService : CartService, public activeCred:ActiveCredentialsService, private _cookieService:CookieService, private router:Router) { }

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


  toogleUser(){

      $("#dropdownAdmin").slideToggle()
     
  }

  signOut(){
    this.activeCred.user = undefined;
  this._cookieService.delete('tokenJwt','/');
  this._cookieService.delete('tokenJwt','/admin');
  this.router.navigate(['login'])
  }


 
  
  
}
