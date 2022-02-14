import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class FormServiceService {
  // user!: User;
  private name: string;
  // url = 'https://api.github.com/users/'
  constructor(private http: HttpClient) {
    this.name = 'paulmunyao';
  }

  getUsers() {
    return this.http
      .get(
        'https://api.github.com/users/' +
          this.name +
          '?client_id=' +
          environment.api_Token
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  getRepositories() {
    return this.http
      .get(
        'https://api.github.com/users/' +
          this.name +
          '?client_id=' +
          environment.api_Token
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  updateUser(name: string) {
    this.name = name;
  }
}
