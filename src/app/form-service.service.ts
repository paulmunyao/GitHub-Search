import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClientModule } from '@angular/common/http';
import { observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  getUser(){
    return User
  }

  constructor() { }
}
