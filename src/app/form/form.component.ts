import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from '../user';
import { FormServiceService } from '../form-service.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [FormServiceService],
})
export class FormComponent implements OnInit {
  user!: User;



  constructor(userService: FormServiceService) {

  }

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
