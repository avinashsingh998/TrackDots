import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ContactForm } from '../models/contact-form';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ActiveCredentialsService } from './active-credentials.service';
import { CookieService } from 'ngx-cookie-service';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //This class handles the call for users like fetching tourists attraction, registration of user etc

  //getting the api usr from environment file
  private apiUrl = environment.apiURL + 'user/';

  constructor(
    private router: Router,
    private _activeCred: ActiveCredentialsService,
    private _cookiesService: CookieService,
    private _commonServices: CommonService
  ) {}

  //Feedback submission by user
  async submitFeedback(name: String, subject: String, description: String) {
    const result = await fetch(this.apiUrl + 'feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        description: description,
        subject: subject,
      }),
    });

    return result;
  }

  //contact us form submission
  async addticket(contactForm: ContactForm) {
    try {
      const token = this._cookiesService.get('tokenJwt');
      if (!token) {
        this._commonServices.loginFirstWarning();
        this.router.navigate(['/login']);
        throw new Error('Jwt Token not found');
      } else {
        const result = await fetch(this.apiUrl + 'contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            contactForm: contactForm,
          }),
        });
        if (result.ok) return result.json();
        else if (result.status == 401) {
          Swal.fire(
            'Unauthorized',
            'You are not an authorized person, Login first',
            'warning'
          );
          this.router.navigate(['/login']);
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  //Sending credentials of user for new user registration
  async sendNewUserCredentials(formData: any) {
    const result = await fetch(this.apiUrl + 'newUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        newUserData: formData,
      }),
    });
    if (result.ok) return result.json();
    else if (result.status == 409) {
      Swal.fire('Conflict', 'Email Id Already registered', 'error').then(() => {
        this.router.navigate(['/login']);
      });
    } else
      result.json().then((dt) => {
        console.log(dt);
      });
  }

  //This method will verify the OTP for email verification of the user, the OTP will be obtained from mail
  async validateOtp_and_CreateUser(otp: any) {
    const result = await fetch(this.apiUrl + 'verifyWithOTP', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        otp: otp,
        id: this._activeCred.tempUserId, //this is a temporary user it for OTP reference, got from backend form previous call
      }),
    });
    if (result.ok) {
      result.json().then((dt) => {
        Swal.fire(
          'Registered',
          'Your usesr id is <strong color:"red">' + dt.user_id + '</strong>.',
          'success'
        ).then(() => {
          this.router.navigate(['/login']);
        });
      });
    } else if (result.status == 401) {
      Swal.fire('retry', 'Invalid Otp', 'error');
    } else
      result.json().then((dt) => {
        console.log(dt);
      });
  }

  //Login Existing user and get JWT Token and user credentials

  async loginUser(id: string, key: string) {
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
      result.json().then((dt) => {
        this._activeCred.user = dt.user;
        this._activeCred.admin = undefined;
        this._cookiesService.set('tokenJwt', dt.token);
        this.router.navigate(['/']);
      });
    }
    return result;
  }

  async varifyOnReload() {
    const token = this._cookiesService.get('tokenJwt');

    if (token) {
      const result = await fetch(this.apiUrl + 'verifyUser', {
        method:"GET",
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }

      });
      console.log(result)
      if(result.ok){
        result.json().then(user=>{
          this._activeCred.user = {...user}
          console.log(user, this._activeCred.user)

        })
      }
    }
  }
}
