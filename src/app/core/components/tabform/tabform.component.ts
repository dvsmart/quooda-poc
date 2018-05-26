import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { CustomTab } from '../../../viewmodel/custom/customTab';
import { CustomField } from '../../../viewmodel/custom/CustomField';

@Component({
  selector: 'app-tabform',
  templateUrl: './tabform.component.html',
  styleUrls: ['./tabform.component.scss']
})
export class TabformComponent implements OnInit {
  @Input() tabs: CustomTab[] = [];
  form: FormGroup;
  childForm: any;
  get changes() { return this.form.valueChanges; }
  get valid() { return this.form.valid; }
  get value() { return this.form.value; }

  @Output()
  submit: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = new FormGroup({});
  }

  onFormSubmit() {
    var result = [];
    this.tabs.forEach(t => result.push(JSON.stringify(t.tabFormGroup.value)));
    alert(result);

  }
}
