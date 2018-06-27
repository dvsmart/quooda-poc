import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { MatTableDataSource } from '@angular/material';
import { ColumnSetting, ColumnMap } from '../../models/columnsetting';
import { TableConfig } from '../../models/TableConfig';

@Injectable()
export class ApiService {
  api = environment.apiUrl;
  dataSource: MatTableDataSource<any>;
  columns: ColumnSetting[];
  message: string = "";
  total: number;
  pageSize: number;
  caption?: string;
  displayedColumns: string[];

  _config: TableConfig;

  data: any[];

  constructor(private httpClient: HttpClient) { }

  getData(path) {
    this.httpClient.get<any[]>(this.api + path).subscribe(x => {this.data = x; console.log(x);});
  }

  get() {
    return this.data;
  }

  Initialize(config: TableConfig) {
    this._config = config;
  }

  Setup(path) {
    debugger;
    if (this.isValidConfig()) {
      this.getData(path);
      this.setCaption();
      this.setColumnsFromConfig();
      this.setColumnsFromDataRow();
      this.setTableColumns();
      this.setTablePagination();
    }
  }

  gridSetup() {
    if (this.isValidConfig()) {
      this.setCaption();
      this.setColumnsFromConfig();
      this.setColumnsFromDataRow();
      this.setTableColumns();
      this.setTablePagination();
    }
  }

  setCaption() {
    if (this._config.caption != "") {
      this.caption = this._config.caption;
    }
  }

  setTableColumns() {
    this.displayedColumns = this.columns.map(x => x.primaryKey);
    if (this._config.canExpand && this.displayedColumns != null) {
      this.displayedColumns.unshift('expand');
    }
    if (this._config.canSelect && this.displayedColumns != null) {
      this.displayedColumns.unshift('select');
    }
    if (this._config.canDelete && this.displayedColumns != null) {
      this.displayedColumns.push('delete');
    }
  }

  isValidResponse(): boolean {
    if (this.data != null && this.data != undefined) {
      return true;
    }
    return false;
  }

  isValidColumns() {
    if (this.columns != null && this.columns != undefined) {
      return true;
    }
    else {
      return false;
    }
  }

  setTablePagination() {
    debugger;
    if(this.data != null){
      //this.total = this.data.totalCount;
      //this.pageSize = this.data.pageSize;
    }
    
  }


  isValidConfig(): boolean {
    if (this._config != null && this._config != undefined) {
      return true;
    }
    return false;
  }



  // setMessage() {
  //   if (!this.isValidResponse()) {
  //     this.message = "No records found";
  //   }
  // }


  setColumnsFromConfig() {
    if (this._config.columns != null) {
      this.columns = this._config.columns.map(col => new ColumnMap(col));
    }
  }

  setColumnsFromDataRow() {
    if (this._config.columns == null){
      this.columns = Object.keys(this.data[0])
      .map(key => {
        return new ColumnMap({
          primaryKey: key,
          header: key.slice(0, 1).toUpperCase() +
            key.replace(/_/g, ' ').slice(1),
          format: 'default',
        });
      });
    }
  }
}

