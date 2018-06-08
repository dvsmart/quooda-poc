import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomTab } from '../../../../viewmodel/custom/customTab';
import { CustomField } from '../../../../viewmodel/custom/CustomField';
import { Task } from '../../model/task';

@Component({
  selector: 'app-taskdetail',
  templateUrl: './taskdetail.component.html',
  styleUrls: ['./taskdetail.component.scss']
})
export class TaskdetailComponent implements OnInit {
  @Input() rowdata;
  taskForm: FormGroup;
  constructor() { }

  ngOnInit() {
    debugger;
    console.log(this.rowdata);
    this.taskForm = new FormGroup({
      
    })

  }

  saveTask() {
    debugger;
    console.log(this.taskForm);
  }


}
