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
    console.log(this.dataObject);
    this.objectProps =
      Object.keys(this.dataObject)
        .map(prop => {
          return Object.assign({}, { key: prop }, this.dataObject[prop]);
        });
    const formGroup = {};
    // for (let prop of Object.keys(this.dataObject)) {
    //   debugger;
    //   console.log(prop);
    //   formGroup[prop] = new FormControl(this.dataObject[prop].value || '', this.mapValidators(this.dataObject[prop].validation));
    //   console.log(formGroup[prop]);
    // }


    this.dataObject.forEach(element => {
      formGroup[element.key] = element.isManadatory ? new FormControl(element.value || '', Validators.required)
                                              : new FormControl(element.value || '');
    });

    this.form = new FormGroup(formGroup);
    console.log(this.form);


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
