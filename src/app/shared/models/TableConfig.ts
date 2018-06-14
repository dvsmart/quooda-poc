import { ColumnSetting } from "./columnsetting";

export class TableConfig {
  caption?: string;
  columns: ColumnSetting[];
  canExpand?: boolean;
  canSort?:boolean;
  canSelect?:boolean;
  canDelete?:boolean = true;
  detailComponent?:any;
  pageSize?:number;
}
