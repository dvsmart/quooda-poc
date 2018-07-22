import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DeleteService } from '@app/shared/services/delete.service';
import { DeleteModel } from '@app/shared/models/deleteModel';

@Component({
  selector: 'app-delete-confirm-dialog',
  templateUrl: './delete-confirm-dialog.component.html',
  styleUrls: ['./delete-confirm-dialog.component.scss']
})
export class DeleteConfirmDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,
  private matDialogRef: MatDialogRef<DeleteConfirmDialogComponent>,private deleteService:DeleteService,) { }
  deleteModel: DeleteModel;
  ngOnInit() {
  }

  onNoClick(): void {
    this.matDialogRef.close();
  }

  populateModel(){
    debugger;
    this.deleteModel = new DeleteModel();
    this.data.ids.forEach(element => {
      this.deleteModel.ids.push(element);
    });
    this.deleteModel.url = this.data.actionUrl;
    this.deleteModel.key = this.data.key !== null ? this.data.key : 'id';
  }

  confirm(){
    this.populateModel();
    this.deleteService.deleteServiceWithId(this.deleteModel).subscribe();
  } 

}


