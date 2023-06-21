import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ContactForm } from '../models/contact-form';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiURL+'user/';

  constructor() { }

  async submitFeedback(name:String, subject:String, description:String){

    const result = await fetch(this.apiUrl + 'feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name:name,
        description:description,
        subject:subject
      }),
    });

    return result;


  }


  async addticket(contactForm:ContactForm){
    const result = await fetch(this.apiUrl + 'contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contactForm:contactForm
      }),
    });
    if(result.ok)
      return result.json();
  }


  
}
