import { ColumnSetting, ColumnMap } from "@app/shared/models/columnsetting";
import { MatTableDataSource } from "@angular/material";

export class TableConfig {
  caption?: string;
  columns: ColumnSetting[];
  canExpand?: boolean = false;
  canSort?: boolean = true;
  canSelect?: boolean = false;
  canDelete?: boolean = true;
  detailComponent?: any;
  pageSize: number;
  dataUrl?:string;
  deleteUrl?:string;
  notify?:boolean;

  /**
   *
   */
  constructor(pageSize:number, canExpand?:boolean,multiSelect?:boolean,canDelete?:boolean) {
    this.canExpand = canExpand;
    this.canSelect = multiSelect;
    this.canDelete = canDelete;
    this.pageSize = pageSize;
  }
}


export class SmartGrid<T extends any>{
  caption?: string
  dataSource: MatTableDataSource<any>;
  columns: ColumnSetting[];
  total: number;
  pageSize: number;
  headers: string[];
  data: any;
  private _columnDefs: ColumnSetting[];
  private _datasource: MatTableDataSource<T>;
  private _data: any;
  private _dataRow: {};
  private _config: TableConfig;
  cols: [{ field: "", type: '' }];


  constructor(data: T[], config: TableConfig, columnDefs?: ColumnSetting[]) {
    this._columnDefs = columnDefs;
    this._config = config;
    this.setup(data);
  }

  setup(data) {
    if (data != undefined) {
      this._data = data;
      this._dataRow = data[0];
      this.setDatasource();
      this.setColumnDefinitions();
      this.setColumnHeaders();
      this.setColumnActions();
    }
  }

  setColumnDefinitions() {
    if (this._columnDefs == null) {
      this.columns = Object.keys(this._dataRow)
        .map(key => {
          return new ColumnMap({
            primaryKey: key,
            header: key.slice(0, 1).toUpperCase() +
              key.replace(/_/g, ' ').slice(1),
            format: 'default',
          });
        });
    } else {
      this.columns = this._columnDefs.map(col => new ColumnMap(col));
    }
  }

  setColumnHeaders() {
    if (this.columns != null) {
      this.headers = this.columns.map(x => x.primaryKey);
    }
  }

  setColumnActions() {
    if (this.headers != null) {
      if (this._config.canExpand) {
        this.headers.unshift('expand');
      }
      if (this._config.canSelect) {
        this.headers.unshift('select');
      }
      if (this._config.canDelete) {
        this.headers.push('delete');
      }
    }
  }

  setDatasource() {
    if (this._data != null && this._data != undefined) {
      this.dataSource = new MatTableDataSource(this._data);
      this.total = this._data.totalCount;
      this.pageSize = this._data.pageSize;
    }
  }



}