import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class NotifierService {
  public  message  = new Subject<any>();
  _message: string;
  constructor(private snackbar : MatSnackBar) { }

  showMessage(message: string){
    this.message.next(message);
  }

  getMessage(): Observable<any>{
    return this.message.asObservable();
  }

  show(message){
    this.snackbar.open(message,null,{duration:3000});
  }
}
