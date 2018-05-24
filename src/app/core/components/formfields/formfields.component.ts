import { Component, OnInit, Input } from '@angular/core';
import { CustomTab } from '../../../viewmodel/custom/customTab';
import { FormBuilder, FormGroupName, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formfields',
  templateUrl: './formfields.component.html',
  styleUrls: ['./formfields.component.scss']
})
export class FormfieldsComponent implements OnInit {
  @Input() tabForm;
  form: FormGroup;
  
  constructor() { 
    this.form = new FormGroup({
      firstName: new FormControl()
   });
  }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl()
   });
  }

  buildFormFields(){
    var fields = this.tabForm.fields;
  }


}
