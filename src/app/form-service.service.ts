import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FormServiceService {
  name: string;
  avatar: any;
  bio: any;
  location: string;
  email: string;
  followers: number;
  following: number;
  repos: any;


  constructor(private http: HttpClient) { }
  userFetch(username: string){
    let userUrl = `https://api.github.com/users/${username}`;
    let promise = new Promise((resolve:any, reject:any)=>{
      this.http.get<User>(userUrl),{
        headers: {
          authorization:environment.apiToken,
        }
      }
    })

  }










}
