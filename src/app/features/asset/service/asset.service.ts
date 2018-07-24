import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '../../../../../node_modules/@angular/common/http';
import { CreateAssetPropertyRequest } from '@app/features/asset/model/CreateAssetPropertyRequest';
import { Observable } from '../../../../../node_modules/rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  api = environment.apiUrl + 'AssetProperties/create';
  constructor(private http: HttpClient) { }

  public add(propertyModel: CreateAssetPropertyRequest): Observable<boolean> {
    return this.http.post<boolean>(environment.apiUrl + 'AssetProperties/create', propertyModel);
  }

  public update(id: number, propertyModel: CreateAssetPropertyRequest): Observable<boolean> {
    return this.http.put<boolean>(environment.apiUrl + 'AssetProperties/edit/?id=' + id, propertyModel);
  }

  public getSingle(id: number): Observable<CreateAssetPropertyRequest> {
    return this.http.get<CreateAssetPropertyRequest>(environment.apiUrl + 'AssetProperties/' + id);
  }
}
