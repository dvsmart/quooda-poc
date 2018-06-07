import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formdialog',
  templateUrl: './formdialog.component.html',
  styleUrls: ['./formdialog.component.scss']
})
export class FormdialogComponent implements OnInit {
  form: FormGroup;
  description: string;
  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<FormdialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.description = data.title;
  }

  ngOnInit() {
    this.form = this.fb.group({
      description: '',
      taskName:'',
      startDate:new Date,
      endDate:new Date
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close(): void {
    this.dialogRef.close();
  }

}
