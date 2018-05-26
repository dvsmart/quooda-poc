import { Component, OnInit } from '@angular/core';
import { ListConfig } from '../../viewmodel/listConfig';
import { TileConfig } from '../../viewmodel/tileConfig';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomTab } from '../../viewmodel/custom/customTab';
import { FieldOption, CustomField } from '../../viewmodel/custom/CustomField';

@Component({
  selector: 'app-custom-entity-page',
  templateUrl: './custom-entity-page.component.html',
  styleUrls: ['./custom-entity-page.component.scss']
})
export class CustomEntityPageComponent implements OnInit {
  name: string;

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.name = 'checklist-'+ id;
    this.buildTabs();
  }
  goback(){
    this.router.navigate(['/checklist']);
  }

  tabs: CustomTab[];

  openChecklistForm() {
    this.buildTabs();
  }

  buildTabs() {
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

    var fields2: CustomField[] = [
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
        options: [
          new FieldOption('Male',1),
          new FieldOption('Female',2)
      ]
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


    var tabs: CustomTab[] = [
      new CustomTab(12,'Questionaire',fields1),
      new CustomTab(32,'Questionaire 2',fields2),
    ];

    this.tabs = tabs;
  }

}
