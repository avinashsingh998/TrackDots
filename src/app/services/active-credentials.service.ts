import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ActiveCredentialsService {

  admin!:User|undefined;
  user!:User|undefined;

  tempUserId!:any;
  constructor() { }
}
