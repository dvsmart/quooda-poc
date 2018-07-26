import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

export class ApiService {
  url: string;
  constructor(private http: HttpClient,private endpoint: string) {
    this.url = environment.apiUrl + endpoint + '/';
  }

  public getAll<T>(): Observable<T> {
    return this.http.get<T>(this.url);
  }

  public getSingle<T>(id: number): Observable<T> {
    return this.http.get<T>(this.url + id);
  }

  public add<T>(itemName: string): Observable<T> {
    const toAdd = JSON.stringify({ ItemName: itemName });

    return this.http.post<T>(this.url, toAdd);
  }

  public update<T>(id: number, itemToUpdate: any): Observable<T> {
    return this.http
      .put<T>(this.url + id, JSON.stringify(itemToUpdate));
  }

  public delete<T>(id: number): Observable<T> {
    return this.http.delete<T>(this.url + id);
  }

  // list(queryOptions: QueryOptions): Observable<T[]> {
  //   return this.httpClient
  //     .get(`${this.url}/${this.endpoint}?${queryOptions.toQueryString()}`)
  //     .map((data: any) => this.convertData(data.items));
  // }

  // delete(id: number) {
  //   return this.httpClient
  //     .delete(`${this.url}/${this.endpoint}/${id}`);
  // }

  // private convertData(data: any): T[] {
  //   return data.map(item => this.serializer.fromJson(item));
  // }
}
