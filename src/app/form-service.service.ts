import { Injectable } from '@angular/core';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  getUser(){
    return User
  }

  constructor() { }
}
