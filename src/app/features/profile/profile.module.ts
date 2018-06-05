import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileService } from './service/profile.service';
import { MaterialModule } from '../../material.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '', component: ProfileComponent
}];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  providers:[ProfileService],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
