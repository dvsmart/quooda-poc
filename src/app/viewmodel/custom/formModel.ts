import { CustomField } from "./CustomField";

export class CustomForm {
  title?: string;
  fields: CustomField[];
  standalone?: boolean;

  constructor(fields: CustomField[],title?:string,standalone?:boolean) {
    this.title = title;
    this.fields = fields;
    this.standalone = standalone
  }
}
