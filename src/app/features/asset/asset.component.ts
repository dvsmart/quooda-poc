import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TableConfig } from '@app/shared/models/TableConfig';
import { FormGroup } from '../../../../node_modules/@angular/forms';
import { AssetService } from '@app/features/asset/service/asset.service';


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
  addRecordVisible: boolean;
  formData: any;
  notify;

  constructor(private assetservice: AssetService) { }

  ngOnInit() {
    this.columnsConfig = new TableConfig(5, false, true);
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
          format: 'date',
          isVisibleForMobile:false
        },
        {
          primaryKey: 'assetType',
          header: 'Asset Type'
        }
      ];
    this.columnsConfig.columns = columns;
  }

  addRecord(event){
    this.addRecordVisible = event;
    this.formData = null;
  }

  close(){
    this.addRecordVisible = false;
  }

  savedResponse(e){
    if(this.notify){
      this.notify = false;
    }
    this.notify = e;
  }

  edit(record){
    this.addRecordVisible = true;
    //this.formData = record;
    debugger;
    this.assetservice.getSingle(record.id).subscribe(x=> {this.formData = x; console.log(x);});
  }
}
