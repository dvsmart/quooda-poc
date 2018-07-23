import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CustomTab } from '@app/viewmodel/custom/customTab';
import { FormBuilder, FormGroupName, FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomField } from '@app/viewmodel/custom/CustomField';

@Component({
  selector: 'app-formfields',
  templateUrl: './formfields.component.html',
  styleUrls: ['./formfields.component.scss']
})
export class FormfieldsComponent implements OnInit {
  @Input() tabForm;
  @Input() mainForm;
  fields: CustomField[] = [];

  @Output() formChanges: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {


  }

  ngOnInit() {
    this.fields = this.tabForm.length == 1 ? this.tabForm[0].fields : this.tabForm.fields;
    this.mainForm.valueChanges.subscribe(() => {
      this.formChanges.emit(this.mainForm.value)
    });
  }
}
