import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TaskStatus } from '../../model/TaskStatus';
import { Priority, TaskPriority } from '../../model/TaskPriority';
import { TaskService } from '../../service/task.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss'],
})
export class AddtaskComponent implements OnInit {
  form: FormGroup;
  description: string;
  taskStatus: Observable<TaskStatus[]>;
  taskPriority : Observable<TaskPriority[]>;

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddtaskComponent>,
    @Inject(MAT_DIALOG_DATA) data,private taskservice: TaskService ) {
    this.description = data.title;
  }

  ngOnInit() {
    this.taskStatus =this.taskservice.getTaskStatus();
    this.taskPriority = this.taskservice.getTaskPriorities();
    this.form = this.fb.group({
      description: '',
      name: '',
      startDate: '',
      dueDate: '',
      TaskStatusId: '',
      TaskPriorityId : ''
    });
  }

  save() {
    this.taskservice.addTask(this.form.value).subscribe(a => { this.dialogRef.close(); });
  }

  close(): void {
    this.dialogRef.close();
  }

}
