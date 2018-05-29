import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { ToasterComponent } from '../components/toaster/toaster.component';

@Injectable()
export class ToasterService {
  constructor(private snackBar: MatSnackBar) { }

  showSimpleToaster(msg: string, action?: string) {
    this.snackBar.open(msg, action == "" ? 'Ok' : action, { duration: 1000, panelClass: '<mat-icon>dashboard</mat-icon>' });
  }

  showToasterComponent(msg: string, action?: string, duration?: number, response?: string) {
    this.snackBar.openFromComponent(ToasterComponent, {
      duration: duration,
      data: {
        announcementMessage: msg,
        status: response
      }
    })
  }

  closeToasterWithMessage() {
    this.snackBar.openFromComponent(ToasterComponent, {
      duration: 1000,
      data: {
        announcementMessage: 'Updated successfully',
        status: 'success'
      }
    });
  }

  closeToaster() {
    this.snackBar.dismiss();
  }

}
