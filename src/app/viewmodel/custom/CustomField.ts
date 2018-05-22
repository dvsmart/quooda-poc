import { ValidatorFn } from "@angular/forms";

export class CustomField {
  id: number;
  key: string;
  label: string;
  value?: any;
  type: string;
  isMandatory?: boolean;
  order?: number;
  placeholder?: string;
  disabled?: boolean;
  validation?: ValidatorFn[];
  tabId?: number;
  options?:FieldOption[]
}

export class FieldOption{
  label:string;
  value:number;

  constructor(label:string, value:number) {
    this.label = label;
    this.value = value
  }
}
