import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UserService } from '@app/features/user/service/user.service';
import { DatatableComponent } from '@app/shared/components/datatable/datatable.component';
import { TableConfig } from '@app/shared/models/TableConfig';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  columnsConfig: TableConfig;
  constructor(private userservice: UserService) { }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DatatableComponent, {
  //     data: {
  //       url: 'User',
  //       config : this.columnsConfig
  //     },
  //     width: '850px',
  //     height: '700px',
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }

  ngOnInit() {
    this.columnsConfig = new TableConfig('Users', 5);
    this.columnsConfig.dataUrl = 'User';
    const columns =
      [
        {
          primaryKey: 'userName',
          header: 'Username'
        },
        {
          primaryKey: 'emailAddress',
          header: 'Email'
        },
        {
          primaryKey: 'firstName',
          header: 'First Name'
        },
        {
          primaryKey: 'lastName',
          header: 'Last Name'
        },
        {
          primaryKey: 'city',
          header: 'City'
        },
        {
          primaryKey: 'roleName',
          header: 'Role'
        },
        {
          primaryKey: 'userType',
          header: 'Type'
        },
        {
          primaryKey: 'addedDate',
          header: 'Added On',
          format: 'date'
        }
      ];
    this.columnsConfig.columns = columns;
  }

}
