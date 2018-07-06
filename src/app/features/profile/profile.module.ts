import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileService } from './service/profile.service';
import { MaterialModule } from '../../shared/material.module';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

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
