import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from '@app/services/generic.service';
import { Menu } from '@app/core/models/menuModel';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';


@Injectable()
export class MenuService {
  api = environment.apiUrl + 'Menu';
  constructor(private http: HttpClient) {
  }

  public getMenuItems(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.api);
  }

}


