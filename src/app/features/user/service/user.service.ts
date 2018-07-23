import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '@app/features/user/model/user';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  api = environment.apiUrl + 'User';
  constructor(private http: HttpClient) { }

  get(page: number, pageSize: number): Observable<User[]> {
    return this.http.get<User[]>(this.api + '?page=' + page + '&pageSize=' + pageSize)
  }
}
