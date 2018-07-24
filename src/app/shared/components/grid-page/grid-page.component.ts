import { Component, OnInit, Input, ViewChild, Output, EventEmitter} from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

import { MatSidenav } from '@angular/material';


@Component({
  selector: 'app-grid-page',
  templateUrl: './grid-page.component.html',
  styleUrls: ['./grid-page.component.scss'],
  
})
export class GridPageComponent implements OnInit {
  @Input() tableConfig;
  @Input() title: string;
  @Input() refresh: boolean;

  animationState = 'out';
  selectedGridRow: SelectionModel<any>;
  hasModified: boolean = false;

  @ViewChild('sidenav') sidenav: MatSidenav;
  @Output() addNewRecord = new EventEmitter();
  @Output() editRecord = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.refresh){
      this.hasModified = true;
    }
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
    this.hasModified = true;
  }

  triggerAddNewEvent(event){
    this.addNewRecord.emit(event);
  }

}
