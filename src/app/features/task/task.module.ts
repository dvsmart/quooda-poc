import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from '@app/features/task/task.component';
import { TaskdetailComponent } from '@app/features/task/components/taskdetail/taskdetail.component';
import { Routes, RouterModule } from '@angular/router';
import { TaskService } from '@app/features/task/service/task.service';
import { AddtaskComponent } from '@app/features/task/components/addtask/addtask.component';
import { TaskfilterComponent } from '@app/features/task/components/taskfilter/taskfilter.component';
import { TasklistComponent } from '@app/features/task/components/tasklist/tasklist.component';
import { SharedModule } from '@app/shared/shared.module';

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
