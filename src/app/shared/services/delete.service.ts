import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs/Observable';
// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import { DeleteModel } from '@app/shared/models/deleteModel';
import { ToasterService } from '@app/shared/services/toaster.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {
  api: string
  subscription: Subscription;

  constructor(private http: HttpClient, private toaster: ToasterService) {
    this.api = environment.apiUrl;
  }

  deleteServiceWithId(deleteModel: DeleteModel): Observable<any> {
    return this.http
      .delete(this.api + deleteModel.url + '/?' + deleteModel.key + "=" + deleteModel.ids)
      .catch(this.handleError);
  }

  delete(deleteModel: DeleteModel): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    return this.http
      .post(this.api + deleteModel.url, deleteModel, { headers: headers })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    this.toaster.open(errMsg);
    return Observable.throw(errMsg);
  }


}
