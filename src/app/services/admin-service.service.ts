import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {environment} from 'src/environments/environment'
import { ActiveCredentialsService } from './active-credentials.service';
import { Router } from '@angular/router';
import { Ticket } from '../models/ticket';


@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  private apiUrl = environment.apiURL + 'admin/';

  orders=[]
  

  constructor(private cookieServ : CookieService, private activeCred:ActiveCredentialsService, private router:Router) { 
   
  }

  async getOrders(){
    try {
      const token = this.cookieServ.get('tokenJwt');
      if (!token) {
        throw new Error('JWT token must be provided');
      }
  
      const result = await fetch(this.apiUrl + 'bookings', {
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
      throw new Error('1')
    }
  }


  async getFeedbacks(){
    try {
      const token = this.cookieServ.get('tokenJwt');
      if (!token) {
        throw new Error('JWT token must be provided');
      }

  
      const result = await fetch(this.apiUrl + 'feedback', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      console.log(result);
  
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
      throw new Error('1')
    }
  }


  async updateFeedback(id:string){
    try {
      const token = this.cookieServ.get('tokenJwt');
      if (!token) {
        throw new Error('JWT token must be provided');
      }

  
      const result = await fetch(this.apiUrl + 'feedbackUpdate?id='+id, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer '+ token
        }
      });

      if(result.status == 200) return result.json();
      else if(result.status==401){
        console.log("Not an authorized person");
        this.router.navigate(['/admin/login'])
      }
  }
  catch(err){
    console.log(err)
  }
  }


  async getTickets(){
    try{
      const token = this.cookieServ.get('tokenJwt');
      if(!token) console.error("No token found");

      const result = await fetch(this.apiUrl+'tickets', {
        method:'GET',
        headers:{
          'Authorization':'Bearer '+token
        }
      })

      if(result.status == 200) return result.json();
      else if(result.status==401){
        console.log("Not an authorized person");
        this.router.navigate(['/admin/login'])
      }
    }catch(err){
      console.log(err)
    }
  }


  async updateTicket(ticket:Ticket){
    try{
      const token = this.cookieServ.get('tokenJwt');
      if (!token) {
        throw new Error('JWT token must be provided');
      }
      const result = await fetch(this.apiUrl+'tickets',{
        method:"PUT",
        headers:{
          'Authorization': 'Bearer '+ token,
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          ticket:ticket
        })
      })
  
      if(result.ok) {
        console.log("Uodated successfully");
        return result.json();
      }
      else{
        console.log(result.json())
      }
    }
    catch(err){
      console.log(err,"Error while updating");

    }
  }

  
}
