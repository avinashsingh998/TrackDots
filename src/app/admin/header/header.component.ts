import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ActiveCredentialsService } from 'src/app/services/active-credentials.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  

  constructor(public activeCred:ActiveCredentialsService, private _cookieService: CookieService, private _router:Router) { }

  ngOnInit(): void {

// setInterval(()=>{
//   console.log(this.activeCred.admin)

// },5000) 
 }

 signOut(){
  this.activeCred.admin = undefined;
  this._cookieService.delete('tokenJwt','/');
  this._cookieService.delete('tokenJwt','/admin');
  this._router.navigate(['admin/login'])
 }

 toogleDD(){
  $("#dropdownAdmin").slideToggle()
 }

}
