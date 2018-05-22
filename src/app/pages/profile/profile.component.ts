import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomField, FieldOption } from '../../viewmodel/custom/CustomField';
import { CustomformComponent } from '../../shared/components/customform/customform.component';
import { CustomForm } from '../../viewmodel/custom/formModel';
import { CustomTab } from '../../viewmodel/custom/customTab';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  customFields: CustomField[] = [];
  customTabs: CustomTab[] = [];
  formModel: CustomForm;
  constructor() { }
  @ViewChild(CustomformComponent) form: CustomformComponent;

  ngOnInit() {
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
          new FieldOption('India',12),
          new FieldOption('London',13),
          new FieldOption('US',14),
          new FieldOption('Italy',16),
          new FieldOption('Spain',89)
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
    this.formModel = new CustomForm(this.customFields,'',false);
    this.buildTabs(this.customFields)

  }

  buildTabs(customfields: CustomField[]) {
    var fields1: CustomField[] = [
      {
        id: 11,
        key: 'name',
        label: 'Name',
        placeholder: 'Enter your name',
        type: 'text'
      },
      {
        id: 12,
        key: 'question1',
        label: 'Question 1',
        placeholder: 'Enter your name',
        type: 'text'
      },
      {
        id: 13,
        key: 'yesno',
        label: 'yes no option',
        options: [new FieldOption('yes',1),new FieldOption('No',2)],
        type: 'radio'
      },
    ]

    let tabs: any[] = [
      {
        id: 11,
        caption: 'Basic',
        fields: customfields
      },
      {
        id: 12,
        caption: 'Questionaire',
        fields: fields1
      },
      {
        id: 32,
        caption: 'Questionaire 2',
        fields: fields1
      },
      {
        id: 32,
        caption: 'Questionaire 2',
        fields: fields1
      },
      {
        id: 32,
        caption: 'Questionaire 42',
        fields: fields1
      },
      {
        id: 32,
        caption: 'Questionaire 28',
        fields: fields1
      },
      {
        id: 32,
        caption: 'Questionaire 32',
        fields: fields1
      },
      {
        id: 32,
        caption: 'Questionaire 24',
        fields: fields1
      }
    ];

    this.customTabs = tabs;
  }


  submit(value: { [name: string]: any }) {
    console.log(value);
  }
}
