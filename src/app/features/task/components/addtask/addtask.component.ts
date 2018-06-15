import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TaskStatus } from '../../model/statusEnum';
import { Priority } from '../../model/priority';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss'],
})
export class AddtaskComponent implements OnInit {
  form: FormGroup;
  description: string;
  taskStatus;
  taskPriority;

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddtaskComponent>,
    @Inject(MAT_DIALOG_DATA) data,private taskservice: TaskService ) {
    this.description = data.title;
    this.taskStatus = TaskStatus;
    this.taskPriority = Priority;
  }

  ngOnInit() {
    this.form = this.fb.group({
      description: '',
      name: '',
      startDate: '',
      dueDate: '',
      status: '',
      priority : ''
    });
  }

  save() {
    this.taskservice.addTask(this.form.value).subscribe(a => { this.dialogRef.close(); });
  }

  close(): void {
    this.dialogRef.close();
  }

}
