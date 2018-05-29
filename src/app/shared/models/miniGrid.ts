import { ColumnType } from "../../viewmodel/grid";


export class ColumnOption{
  field:string;
  title:string;
  width: number;
  type: ColumnType;
}

export class GridOption{
  columns: ColumnOption[];
  url:string;
}

