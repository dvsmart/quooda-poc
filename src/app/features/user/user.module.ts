import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { TableDialogComponent } from '../../shared/components/table-dialog/table-dialog.component';
import { DatatableComponent } from '@app/shared/components/datatable/datatable.component';

const routes: Routes = [
  { path: '', redirectTo: 'settings' },
  { path: 'usermanagement', component: UserComponent}
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserComponent, UserListComponent, UserDetailComponent]
})
export class UserModule { }
