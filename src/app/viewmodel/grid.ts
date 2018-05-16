import { Component } from "@angular/compiler/src/core";

export class GridModel {
  title: string;
  columns: ColumnModel[];
  data: any;
  pageModel: PagingModel;
  uniqueId: any;
  displayAddButton: boolean;
  showExpandableRow: boolean;
  ExpandableComponent: any;
  actions: ActionModel[];
  constructor() {
      this.displayAddButton = true;
      this.showExpandableRow=false;
  }

}

export class ColumnModel {
  columnDefinition: string;
  columnHeader: string;
  columnWidth: string;
  constructor(columnDefinition: string, columnHeader: string, public columnControlType: ColumnType = ColumnType.Label,
      columnWidth: string = "") {
      this.columnDefinition = columnDefinition;
      this.columnHeader = columnHeader;
      this.columnWidth = columnWidth;

  }

  cellcode(element: any) {
      return eval('element.' + this.columnDefinition);
  }


}
export class ActionModel {
  constructor(public actionName: string,public actionIcon:string,public actionUrl: any ,
      public needConfirmation: boolean = false,public confirmationMessage:string= "" ){
  }
}
export class PagingModel {
  pageIndex: number;
  pageSize: number;
  totalRecord: number;
  sortDirection: SortDirection;
  sortColumn: string;
  pagingUrl: string;
  searchBy: string;

  constructor() {
      this.pageIndex =0;
      this.pageSize =5;
      this.sortDirection =SortDirection.Ascending;
      this.sortColumn ="";
      this.pagingUrl = "";
      this.searchBy = "";
  }
}


export enum ColumnType {
  Label,
  Textbox,
  Checkbox,
  DropDown,
  Button
}
export enum SortDirection {
  Ascending,
  Desccending
}
