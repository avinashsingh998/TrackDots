import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActiveCredentialsService } from './active-credentials.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthService {
  private apiUrl = environment.apiURL+'admin/';

  constructor(private cookieService: CookieService, private activCred:ActiveCredentialsService) {}

  async verifyAdmin(id: string, key: string) {
    const result = await fetch(this.apiUrl + 'login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        password: key,
      }),
    });

    if (result.ok) {
      await result.json().then((data) => {
        this.cookieService.set('tokenJwt', data.token);
        this.activCred.admin = data.user;

      });
    }

    return result;
  }



  async verifyWithCookies() {

    try {
      const token = this.cookieService.get('tokenJwt');
      if (!token) {
        throw new Error('JWT token must be provided');
      }
  
      const result = await fetch(this.apiUrl + 'verify', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      // console.log(result);
  
      if (result.ok) {
        return result.json();
      } else {
        // console.log("this is the result " )
        result.json().then(dt =>{
          console.log(dt)
        }).catch(err=>{
          console.log("this is the error while fetching the data ", err)
          throw new Error('1')
        })
        

      }
    } catch (error) {
      console.error('Error while fetching orders:', error);
    }

  
  }
  
}
