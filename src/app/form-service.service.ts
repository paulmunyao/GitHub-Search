import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class FormServiceService {
  private name: string;
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
