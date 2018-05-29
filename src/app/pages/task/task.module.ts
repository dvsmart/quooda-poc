import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskListComponent } from './task-list/task-list.component';
import { RouterModule, Routes } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material.module';

const routes: Routes = [
  {path: '', component: TaskComponent},
  {path:'task/:id',component:TaskDetailComponent}
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TaskComponent, TaskDetailComponent, TaskListComponent],
  providers:[TaskService]
})
export class TaskModule { }
