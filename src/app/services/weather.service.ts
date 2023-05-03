import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import fetch from 'node-fetch';
// import * as https from 'https';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherAPI:string = "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily";

  constructor(private http:HttpClient) { }


  async getWeatherInfo(lat1:string, lon1:string){
    const url = 'https://yahoo-weather5.p.rapidapi.com/weather?lat='+lat1+'&long='+lon1+'&format=json&u=f';
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': '0342ece005msh33af1f4ab0c90a9p176598jsn7bd82954d4af',
        'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log("this is from service layer " +result);
      return result;
    } catch (error) {
      console.error("this is an error from service layer"+error);
      return undefined;
    }
   
  }
}
