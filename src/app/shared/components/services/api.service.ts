import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ApiService {
  api = environment.apiUrl;
  constructor(private httpClient: HttpClient){}
  getData(path): Observable<any> {
    return this.httpClient.get(this.api + path);
  }

}
