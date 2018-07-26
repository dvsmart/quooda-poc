import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessageService {
    private subject = new Subject<any>();
    private isOpened = new Subject<boolean>();

    sendMessage(action: string, id?: number, message?: string) {
        let payload = new Payload(action, id, message);
        this.subject.next(payload);
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

    selectMessage(model?:any){
        let payload = new Payload('delete', undefined, undefined,model);
        this.subject.next(payload);
    }

    createMessage(){
        let payload = new Payload('create');
        this.subject.next(payload);
    }

    editMessage(id: number){
        let payload = new Payload('edit',id);
        this.subject.next(payload);
    }

    cancelMessage(){
        let payload = new Payload('cancel');
        this.subject.next(payload);
    }

    refreshMessage(){
        let payload = new Payload('refresh');
        this.subject.next(payload);
    }
}

export class Payload {
    action: string;
    id?: number;
    message?: string;
    extra:any;
    toggle?:boolean

    constructor(action: string, id?: number, message?: string,extra?:any) {
        this.action = action;
        this.id = id;
        this.message = message;
        this.extra = extra;
    }

    IsNew(){
        return this.action === 'create';
    }

    IsEdit(){
        return (this.id != undefined && this.id != null) && this.action === 'edit';
    }

    IsRefresh(){
        return this.action === 'refresh'
    }

    IsDelete(){
        return this.action === 'delete'
    }

    IsCancel(){
        return this.action === 'cancel';
    }
    
}