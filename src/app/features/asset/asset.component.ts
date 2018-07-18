import { Component, OnInit } from '@angular/core';
import { TableConfig } from '@app/shared/models/TableConfig';


@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {
  visible: boolean = false;
  columnsConfig: TableConfig;
  selectedRows: any[] = [];
  selectedCount = 0;
  constructor() { }

  ngOnInit() {
    this.columnsConfig = new TableConfig(5, false, true);
    this.columnsConfig.url = 'AssetProperties';
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
          primaryKey: 'assetType',
          header: 'Asset Type'
        }
      ];
    this.columnsConfig.columns = columns;
  }
}



  // addSelection(row) {
  //   if (this.selectedRows.indexOf(row) == -1 || this.selectedRows.length === 0) {
  //     this.selectedRows.push(row);
  //   } else {
  //     const index = this.selectedRows.indexOf(row);
  //     if (index !== -1) {
  //       this.selectedRows.splice(index, 1);
  //     }
  //   }
  //   this.selectedCount = this.selectedRows.length;
  // }

