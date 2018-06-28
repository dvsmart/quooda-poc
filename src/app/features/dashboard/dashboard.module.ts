import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material.module';
import { TaskService } from '../task/service/task.service';
import { PiechartComponent } from '../../shared/components/charts/piechart/piechart.component';
import { LinechartComponent } from '../../shared/components/charts/linechart/linechart.component';

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
  declarations: [DashboardComponent],
  entryComponents:[PiechartComponent,LinechartComponent]
})
export class DashboardModule { }
