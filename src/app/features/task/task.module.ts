import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { TaskdetailComponent } from './components/taskdetail/taskdetail.component';
import { Routes, RouterModule } from '@angular/router';
import { TaskService } from './service/task.service';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { TaskfilterComponent } from './components/taskfilter/taskfilter.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: TaskComponent },
  { path: 'task/:caption', component: TaskComponent }
];


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [TaskService],
  declarations: [
    TaskComponent,
    TaskdetailComponent,
    AddtaskComponent,
    TaskfilterComponent,
    TasklistComponent],
  entryComponents: [AddtaskComponent, TaskdetailComponent]
})
export class TaskModule { }
