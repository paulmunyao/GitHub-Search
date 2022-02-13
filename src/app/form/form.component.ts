import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from '../user';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  user!: User;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    interface ApiResponse {
      name: string;
      location: string;
      email: string;
      followers: number;
      following: number;
    }
    this.http.get<ApiResponse>("https://api.github.com/user").subscribe(data=>{
      this.user = new User(data.name,data.location,data.email,data.followers,data.following)

    })
  }
}
