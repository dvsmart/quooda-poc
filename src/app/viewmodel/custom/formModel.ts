import { CustomField } from "./CustomField";

export class FormModel {
  title: string;
  fields: CustomField[];

  constructor(title:string,fields: CustomField[]) {
    this.title = title;
    this.fields = fields;
  }
}
