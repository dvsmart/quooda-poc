import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomForm } from '../../../viewmodel/custom/formModel';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customtab',
  templateUrl: './customtab.component.html',
  styleUrls: ['./customtab.component.scss']
})
export class CustomtabComponent implements OnInit {
  @Input() tabConfig;
  objectProps;
  form: FormGroup;
  constructor() {
  }


  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  get value() { return this.form.value; }
  ngOnInit() {
    var fields = this.tabConfig;
    this.objectProps = Object.keys(fields)
      .map(prop => {
        return Object.assign({}, { key: prop }, fields[prop]);
      });
    this.form = this.buildFields();
  }

  buildFields(): FormGroup {
    const formGroup = {};
    this.tabConfig.forEach(element => {
      formGroup[element.key] = element.isManadatory ? new FormControl(element.value || '', Validators.required)
        : new FormControl(element.value || '');
    });
    return new FormGroup(formGroup);
  }


  handleSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.submit.emit(this.value);
  }


  // submit(value: { [name: string]: any }) {
  //   console.log(value);
  // }
}
