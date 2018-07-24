import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../../node_modules/@angular/common/http';
import { CreateAssetPropertyRequest } from '@app/features/asset/model/CreateAssetPropertyRequest';
import { Observable } from '../../../../../node_modules/rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  api = environment.apiUrl + 'AssetProperties/createnew';
  constructor(private http: HttpClient) { }

  public add(propertyModel: CreateAssetPropertyRequest): Observable<boolean> {
    return this.http.post<boolean>(this.api, propertyModel);
  }

  public update(id: number, propertyModel: CreateAssetPropertyRequest): Observable<boolean> {
    return this.http.put<boolean>(this.api + id, JSON.stringify(propertyModel));
  }

}
