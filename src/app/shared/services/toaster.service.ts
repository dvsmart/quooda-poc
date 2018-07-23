import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';
import { ToasterComponent } from '@app/shared/components/toaster/toaster.component';

@Injectable()
export class ToasterService {
  actionButtonLabel: string = 'Done';
  action: boolean = true;
  setAutoHide: boolean = true;
  autoHide: number = 1500;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private snackBar: MatSnackBar) { }

  showSimpleToaster(msg: string, action?: string) {
    this.snackBar.open(msg, action == "" ? 'Ok' : action, { duration: this.autoHide, panelClass: '<mat-icon>checkbox</mat-icon>' });
  }

  showToasterComponent(msg: string, action?: string, duration?: number, response?: string) {
    this.snackBar.openFromComponent(ToasterComponent, {
      duration: duration,
      data: {
        announcementMessage: msg,
        status: response == "" ? 'success' : response
      }
    })
  }

  open(msg:string) {
    let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    this.snackBar.open(msg, this.action ? this.actionButtonLabel : undefined, config);
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
