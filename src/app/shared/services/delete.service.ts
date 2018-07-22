import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs/Observable';
// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import { DeleteModel } from '@app/shared/models/deleteModel';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {
  api: string

  constructor(private http: HttpClient) {
    this.api = environment.apiUrl;
  }

  deleteServiceWithId(deleteModel: DeleteModel): Observable<any> {
    debugger;
    return this.http
        .put(this.api + deleteModel.url, { body: + deleteModel.key + "=" + deleteModel.ids})
        .catch(this.handleError);
    } 

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
}

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
}
}
