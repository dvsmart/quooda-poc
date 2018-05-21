import { ValidatorFn } from "@angular/forms";

export class CustomField {
  id: number;
  key: string;
  label: string;
  value: any;
  type: string;
  isMandatory?: boolean;
  order?: number;
  placeholder?: string;
  disabled?: boolean;
  validation?: ValidatorFn[];
}
