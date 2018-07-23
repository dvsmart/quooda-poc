import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TableConfig } from '@app/shared/models/TableConfig';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
  columnsConfig: TableConfig;
  @Output() rowSelected = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.columnsConfig = new TableConfig(5,false,true);
    this.columnsConfig.dataUrl = 'AssetProperties';
    const columns =
      [
        {
          primaryKey: 'dataId',
          header: 'ID'
        },
        {
          primaryKey: 'addressLine1',
          header: 'Address Line 1'
        },
        {
          primaryKey: 'postCode',
          header: 'Post Code'
        },
        {
          primaryKey: 'city',
          header: 'City'
        },
        {
          primaryKey: 'portfolioName',
          header: 'Portfolio'
        },
        {
          primaryKey: 'subPortfolioName',
          header: 'SubPortfolio'
        },
        {
          primaryKey: 'addedDate',
          header: 'Added On',
          format: 'date'
        },
        {
          primaryKey:'assetType',
          header:'Asset Type'
        }
      ];
    this.columnsConfig.columns = columns;
  }

  selectedRow(row){
    this.rowSelected.emit(row);
  }
}
