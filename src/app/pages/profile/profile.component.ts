import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomField } from '../../viewmodel/custom/CustomField';
import { CustomformComponent } from '../../shared/components/customform/customform.component';
import { FormModel } from '../../viewmodel/custom/formModel';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  customFields: CustomField[] = [];
  formModel: FormModel;
  constructor() { }
  @ViewChild(CustomformComponent) form: CustomformComponent;

  ngOnInit() {
    // this.customcontrol = [];
    let controls: any[] = [
      {
        id: 1,
        key: 'name',
        label: 'Name',
        type: 'text'
      },
      {
        id: 2,
        key: 'age',
        label: 'Age',
        type: 'number'
      },
      {
        id: 3,
        key: 'gender',
        label: 'Gender',
        type: 'radio',
        options: [{ label: 'Male', value: 'M' }, { label: 'Female', value: 'F' }]
      },
      {
        id: 4,
        key: 'city',
        label: 'City',
        type: 'select',
        options: [
          { label: "(choose one)", value: '' },
          { label: "Bolzano", value: '39100' },
          { label: "Meltina", value: '39010' },
          { label: "Appiano", value: '39057' }
        ]
      },
      {
        id: 5,
        key: 'dob',
        label: 'DOB',
        type: 'date'
      }
    ]
    this.customFields = controls;
    this.formModel = new FormModel('Custom Form', this.customFields);
  }


  submit(value: { [name: string]: any }) {
    console.log(value);
  }
}
