import { Component, OnInit } from '@angular/core';
import { CustomControl } from '../../viewmodel/customControl';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  customFields: CustomControl[] = [];
  constructor() { }

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
    ]

    this.customFields = controls;
  }

}
