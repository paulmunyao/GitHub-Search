import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
}
