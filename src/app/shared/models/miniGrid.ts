import { ColumnType } from "../../viewmodel/grid";


export class ColumnOption{
  field:string;
  title:string;
  width?: number;
  type?: ColumnType;
}

export class GridOption{
  columns: ColumnOption[];
  url:string;

  constructor(columns:ColumnOption[],url:string){
    this.columns = columns;
    this.url = url;
  }
}

