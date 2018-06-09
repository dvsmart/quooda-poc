import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Task } from '../../model/task';

@Component({
  selector: 'app-taskdetail',
  templateUrl: './taskdetail.component.html',
  styleUrls: ['./taskdetail.component.scss']
})
export class TaskdetailComponent implements OnInit {
  @Input() rowdata;
  taskForm: FormGroup;
  model:Task;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.setForm();
  }

  setForm() {
    let group = {};
    Object.keys(this.rowdata).forEach(k => {
      group[k] = new FormControl(this.rowdata[k]);
    })
    this.taskForm = new FormGroup(group);
  }

  saveTask() {
    alert(JSON.stringify(this.taskForm.value));
  }


}
