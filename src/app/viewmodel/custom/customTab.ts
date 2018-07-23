import { CustomField } from "@app/viewmodel/custom/CustomField";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";

export class CustomTab {
  tabFormGroup?: FormGroup;
  formBuilder?: FormBuilder = new FormBuilder();
  constructor(public id: number, public caption: string, public fields: CustomField[]) {
    this.tabFormGroup = this.createGroup();
  }

  private createGroup() {
    const group = this.formBuilder.group({});
    this.fields.forEach(control => group.addControl(control.key, this.createControl(control)))
    return group;
  }

  private createControl(config: CustomField) {
    const { disabled, validation, value } = config;
    return this.formBuilder.control({ disabled, value }, validation);
  }
}


