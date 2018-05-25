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
  form:FormGroup;

  get changes() { return this.form.valueChanges; }
  get valid() { return this.form.valid; }
  get value() { return this.form.value; }

  @Output()
  submit: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.createGroup();
  }

  createGroup() {
    const group = this.fb.group({});
    this.tabs.forEach(t => t.fields.forEach(control => group.addControl(control.key, this.createControl(control))))
    return group;
  }

  createControl(config: CustomField) {
    const { disabled, validation, value } = config;
    return this.fb.control({ disabled, value }, validation);
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.submit.emit(this.value);
  }

  onFormSubmit(){
    alert(JSON.stringify(this.form.value));


  }
}
