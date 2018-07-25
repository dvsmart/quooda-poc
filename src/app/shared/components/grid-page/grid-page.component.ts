import { Component, OnInit, Input, ViewChild, Output, EventEmitter} from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

import { MatSidenav } from '@angular/material';
import { Subscription } from 'rxjs';
import { MessageService } from '@app/shared/services/message.service';


@Component({
  selector: 'app-grid-page',
  templateUrl: './grid-page.component.html',
  styleUrls: ['./grid-page.component.scss'],
  
})
export class GridPageComponent implements OnInit {
  @Input() tableConfig;
  @Input() title: string;
  @Input() refresh: boolean;
  message: string;
  subscription: Subscription;

  animationState = 'out';
  selectedGridRow: SelectionModel<any>;
  hasModified: boolean = false;

  @ViewChild('sidenav') sidenav: MatSidenav;
  @Output() addNewRecord = new EventEmitter();
  @Output() editRecord = new EventEmitter();

  constructor(private messageservice: MessageService) { 
    //this.subscription = this.messageservice.getMessage().subscribe(message => {debugger; this.message = message; alert("message"); });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
}

  ngOnInit() {
  }

  ngOnChanges(){
  }

  selectedValue(selectedRow) {
    this.selectedGridRow = selectedRow;
  }

  editRow(row){
    this.editRecord.emit(row);
  }

  rowClicked(r){
    this.editRow(r);
  }

  togglefiltersidenav() {
    this.sidenav.toggle();
  }

  refreshData(){
    debugger;
    // this.hasModified = !this.hasModified;
    // this.hasModified = true;
    
  }

  triggerAddNewEvent(event){
    this.addNewRecord.emit(event);
  }

}
