import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { TaskdetailComponent } from './components/taskdetail/taskdetail.component';
import { Routes, RouterModule } from '@angular/router';
import { TaskService } from './service/task.service';
import { MaterialModule } from '../../shared/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { MAT_DATE_LOCALE } from '@angular/material';
import { TaskfilterComponent } from './components/taskfilter/taskfilter.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { DatatableComponent } from '../../shared/components/datatable/datatable.component';
import { FormatCellPipe } from '../../shared/pipes/format-cell.pipe';

const routes: Routes = [
  { path: '', component: TaskComponent },
  { path: 'task/:caption', component: TaskComponent }
];


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [TaskService, { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  declarations: [TaskComponent, TaskdetailComponent, AddtaskComponent, TaskfilterComponent, TasklistComponent, DatatableComponent,FormatCellPipe],
  entryComponents: [AddtaskComponent, TaskdetailComponent]
})
export class TaskModule { }
