import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClientModule } from '@angular/common/http';// 

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  getUser(){
    return User
  }

  constructor() { }

  // constructor(private http: HttpClient,) {}

  // ngOnInit(): void {
  //   interface ApiResponse {
  //     name: string;
  //     location: string;
  //     email: string;
  //     followers: number;
  //     following: number;
  //   }
  //   this.http
  //     .get<ApiResponse>('http://api.github.com/user')
  //     .subscribe((data) => {
  //       this.user = new User(
  //         data.name,
  //         data.location,
  //         data.email,
  //         data.followers,
  //         data.following
  //       );
  //     });
  // }
}
