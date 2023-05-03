import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from "sweetalert2"
import { CartService } from '../services/cart.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router, private _cartService:CartService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // console.log(this.router)

      // console.log(route.queryParams['id'])
      // console.log(route.queryParams['id'] == undefined)
      
      if(this._cartService.bookings.length==0 && route.queryParams['id'] == undefined){
        Swal.fire("Sorry", "You don't have any package in your cart....", "error")
         this.router.navigate(['/']);
         return false;
      }
      else{
        return true;
        
      }
  }
  
}
