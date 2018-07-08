import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../../../../node_modules/@angular/material';
import { UserService } from '@app/features/user/service/user.service';
import { DatatableComponent } from '@app/shared/components/datatable/datatable.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  constructor(public dialog: MatDialog, private userservice: UserService) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DatatableComponent, {
      data: {
        url: 'User'
      },
      width: '850px',
      height: '550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
  }

}
