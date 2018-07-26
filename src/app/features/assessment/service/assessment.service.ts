import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '../../../../../node_modules/@angular/common/http';
import { CreateAssessmentRequest } from '@app/features/assessment/model/CreateAssessmentRequest';
import { Observable } from '../../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {
  api = environment.apiUrl + 'Assessments/';
  constructor(private http: HttpClient) { }

  public add(propertyModel: CreateAssessmentRequest): Observable<boolean> {
    return this.http.post<boolean>(this.api + 'create', propertyModel);
  }

  public update(id: number, propertyModel: CreateAssessmentRequest): Observable<boolean> {
    return this.http.put<boolean>(this.api + 'edit/?id=' + id, propertyModel);
  }

  public getSingle(id: number): Observable<CreateAssessmentRequest> {
    return this.http.get<CreateAssessmentRequest>(this.api + id);
  }
}
