import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '@app/features/profile/profile.component';
import { ProfileService } from '@app/features/profile/service/profile.service';
import { MaterialModule } from '@app/shared/material.module';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

const routes: Routes = [{
  path: '', component: ProfileComponent
}];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers:[ProfileService],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
