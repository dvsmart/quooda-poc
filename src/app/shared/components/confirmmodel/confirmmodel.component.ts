 
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-confirmmodel',
  templateUrl: './confirmmodel.component.html',
  styleUrls: ['./confirmmodel.component.scss']
})
export class ConfirmmodalComponent  {
  updateForm: FormGroup;
  modalTitle: any;
  modalBody: any;
   
  constructor(public dialogRef: MatDialogRef<ConfirmmodalComponent>, @Inject(MAT_DIALOG_DATA) modalInput,
    private fb: FormBuilder, private _router: Router ) {
    this.modalTitle =modalInput.modalTitle;
    this.modalBody = modalInput.modalBody;  
  }

  closeDialog(): void {
    this.dialogRef.close(false);
  }

  submitForm() {
    this.dialogRef.close(true);
  }  
}


