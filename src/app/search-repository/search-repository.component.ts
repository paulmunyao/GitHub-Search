import { Component, OnInit } from '@angular/core';
import { FormServiceService } from '../form-service.service';
@Component({
  selector: 'app-search-repository',
  templateUrl: './search-repository.component.html',
  styleUrls: ['./search-repository.component.css']

})
export class SearchRepositoryComponent implements OnInit {
 usersData: any;
  repo: any;
  search: any;

  constructor(private formService: FormServiceService) {
    this.formService.getUsers().subscribe((userData: any[]) => {


      console.log(userData);
      this.usersData = userData;
    })
    this.formService.getRepositories().subscribe((repo: any[]|undefined) => {
      this.repo = repo;
    })
  }

  searchUser() {
    this.formService.updateUser(this.search);
    this.formService.getUsers().subscribe((userData: any[]) => {
      console.log(userData);
      this.usersData = userData;
    })
    this.formService.getRepositories().subscribe((repo: any[]|undefined) => {
      this.repo = repo;
    })
  }
  

  ngOnInit(): void {
  }

}
