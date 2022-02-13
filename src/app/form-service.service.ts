import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  getUser(){
    return User
  }

  constructor(private http: HttpClient) { }
  getData():Observable<any>{

    const url = "https://api.github.com/users"
    return this.http.get<any>(url)

  }
}
