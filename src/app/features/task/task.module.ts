import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { TaskdetailComponent } from './components/taskdetail/taskdetail.component';
import { Routes, RouterModule } from '@angular/router';
import { TaskService } from './service/task.service';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material.module';
import { FormdialogComponent } from '../../shared/components/formdialog/formdialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddtaskComponent } from './components/addtask/addtask.component';

const routes: Routes = [{
  path: '', component: TaskComponent
}];


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[TaskService],
  declarations: [TaskComponent, TaskdetailComponent, AddtaskComponent],
  entryComponents:[AddtaskComponent,TaskdetailComponent]
})
export class TaskModule { }
