import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveCredentialsService {

  admin!:any;
  user!:any;
  constructor() { }
}
