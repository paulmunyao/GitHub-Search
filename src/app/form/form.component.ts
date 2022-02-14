import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { FormServiceService } from '../form-service.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  usersData: any;
  repo: any;
  search: any;

  constructor(private formService: FormServiceService) {
    this.formService.getUsers().subscribe((userData: any[]) => {
      console.log(userData);
      this.usersData = userData;
    });
    this.formService.getRepositories().subscribe((repo: any[]) => {
      this.repo = repo;
    });
  }

  searchUser() {
    this.formService.updateUser(this.search);
    this.formService.getUsers().subscribe((userData: any[]) => {
      console.log(userData);
      this.usersData = userData;
    });
    this.formService.getRepositories().subscribe((repo: any[]) => {
      this.repo = repo;
    });
  }
  ngOnInit(): void {}
}
