import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material';


@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent {
  success: boolean = false;
  failure: boolean = false;
  loading: boolean = false;
  info: boolean = false;
  message: any;



  constructor(public snackBarRef: MatSnackBarRef<ToasterComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any) {
  }

  ngOnInit() {
    this.message = this.data.announcementMessage;
    let status = this.data.status;
    switch (status) {
      case "success":
        this.success = true;
        break;
      case "failure":
        this.failure = true;
        break;
      case "info":
        this.info = true;
        break;
      case "loading":
        this.loading = true;
      default:
        break;
    }

  }

}
