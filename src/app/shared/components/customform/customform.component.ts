import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  exportAs: 'customform',
  selector: 'app-customform',
  templateUrl: './customform.component.html',
  styleUrls: ['./customform.component.scss']
})
export class CustomformComponent implements OnInit {
  @Input() formConfig;
  objectProps;
  form: FormGroup;
  title: string;

  constructor() { }

  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  get value() { return this.form.value; }

  ngOnInit() {
    this.objectProps = Object.keys(this.formConfig.fields)
        .map(prop => {
          return Object.assign({}, { key: prop }, this.formConfig.fields[prop]);
        });
    this.form = this.buildFields();
    this.title = this.formConfig.title;
  }

  buildFields(): FormGroup{
    const formGroup = {};
    this.formConfig.fields.forEach(element => {
      formGroup[element.key] = element.isManadatory ? new FormControl(element.value || '', Validators.required)
        : new FormControl(element.value || '');
    });
    return new FormGroup(formGroup);
  }

  private mapValidators(validators) {
    const formValidators = [];

    if (validators) {
      for (const validation of Object.keys(validators)) {
        if (validation === 'required') {
          formValidators.push(Validators.required);
        } else if (validation === 'min') {
          formValidators.push(Validators.min(validators[validation]));
        }
      }
    }

    return formValidators;
  }

  onSubmit(formValue) {
    console.log(formValue);
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.submit.emit(this.value);
  }

}
