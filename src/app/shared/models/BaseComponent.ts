import { Injectable, OnInit } from "../../../../node_modules/@angular/core";
import { Subscription } from "../../../../node_modules/rxjs";
import { MessageService, Payload } from "@app/shared/services/message.service";

@Injectable()
export abstract class BaseComponent implements OnInit {
    subscription: Subscription;
    formData: any;
    constructor(private messageservice: MessageService) {
        this.subscription = this.messageservice.getMessage().subscribe((payload: Payload) => {
            if (payload.IsNew()) {
                this.addRecord();
            }
            if (payload.IsEdit()) {
                this.edit(payload.id);
            }
            if (payload.IsCancel()) {
                this.close();
            }
        });
    }

    ngOnInit() { }

    addRecord() { 
        this.formData = null;
    }

    close() { }

    edit(id: number) { }

}