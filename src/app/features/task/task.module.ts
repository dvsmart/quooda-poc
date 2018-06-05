import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { TaskdetailComponent } from './components/taskdetail/taskdetail.component';
import { Routes, RouterModule } from '@angular/router';
import { TaskService } from './service/task.service';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material.module';

const routes: Routes = [{
  path: '', component: TaskComponent
}];


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  providers:[TaskService],
  declarations: [TaskComponent, TasklistComponent, TaskdetailComponent]
})
export class TaskModule { }
