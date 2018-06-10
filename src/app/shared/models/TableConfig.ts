import { ColumnSetting } from "./columnsetting";

export class TableConfig {
  caption?: string;
  data: any[];
  columns: ColumnSetting[];
  total: number;
  canExpand?: boolean;
  canSort?:boolean;
  canSelect?:boolean;
  detailComponent?:any;
}
