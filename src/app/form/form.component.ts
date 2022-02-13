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
  }
}
