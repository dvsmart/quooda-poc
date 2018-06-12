import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material.module';
import { TaskService } from '../task/service/task.service';

const routes: Routes = [{
  path: '', component: DashboardComponent
}];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  providers:[TaskService],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
