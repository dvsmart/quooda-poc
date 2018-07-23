import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '@app/features/user/user.component';
import { UserListComponent } from '@app/features/user/components/user-list/user-list.component';
import { UserDetailComponent } from '@app/features/user/components/user-detail/user-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { TableDialogComponent } from '@app/shared/components/table-dialog/table-dialog.component';
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
