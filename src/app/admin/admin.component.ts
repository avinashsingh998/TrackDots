import { Component, OnInit } from '@angular/core';
import { ActiveCredentialsService } from '../services/active-credentials.service';
import { AdminAuthService } from '../services/admin-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private activeCred:ActiveCredentialsService, private adminAuth:AdminAuthService, private route:Router) { }

  ngOnInit(): void {
    // setInterval(()=>{
    //   console.log(this.activCred.admin)

    // },5000)
    if (!this.activeCred.admin) {
      console.log('user not found');

      this.adminAuth.verifyWithCookies().then((data: any) => {
        // console.log(data, 'err')
        if (data) {
          this.activeCred.admin = data.user;
          console.log("bgfdd",data);
        } else this.route.navigate(['admin/login']);
      }).catch(err=>{
        console.log(err);
        this.route.navigate(['admin/login']);
            })
    }
  }

}
