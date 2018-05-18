import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customform',
  templateUrl: './customform.component.html',
  styleUrls: ['./customform.component.scss']
})
export class CustomformComponent implements OnInit {
  @Input() dataObject;
  objectProps;
  form: FormGroup;
  constructor() { }

  ngOnInit() {
    this.objectProps =
      Object.keys(this.dataObject)
        .map(prop => {
          return Object.assign({}, { key: prop }, this.dataObject[prop]);
        });
    const formGroup = {};
    for (let prop of Object.keys(this.dataObject)) {
      formGroup[prop] = new FormControl(this.dataObject[prop].value || '', this.mapValidators(this.dataObject[prop].validation));
    }

    this.form = new FormGroup(formGroup);
  }

  private mapValidators(validators) {
    const formValidators = [];

    if(validators) {
      for(const validation of Object.keys(validators)) {
        if(validation === 'required') {
          formValidators.push(Validators.required);
        } else if(validation === 'min') {
          formValidators.push(Validators.min(validators[validation]));
        }
      }
    }

    return formValidators;
  }

  onSubmit(formValue){
    console.log(formValue);
  }

}
