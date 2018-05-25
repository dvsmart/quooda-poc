import { Component, OnInit, Input } from '@angular/core';
import { CustomTab } from '../../../viewmodel/custom/customTab';
import { FormBuilder, FormGroupName, FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomField } from '../../../viewmodel/custom/CustomField';

@Component({
  selector: 'app-formfields',
  templateUrl: './formfields.component.html',
  styleUrls: ['./formfields.component.scss']
})
export class FormfieldsComponent implements OnInit {
  @Input() tabForm;
  @Input() mainForm;
  fields: CustomField[] = [];
  constructor() {

  }

  ngOnInit() {
    this.fields = this.tabForm.fields;
  }
}
