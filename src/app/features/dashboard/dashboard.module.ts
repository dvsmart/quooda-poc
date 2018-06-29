import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material.module';
import { PiechartComponent } from '../../shared/components/charts/piechart/piechart.component';
import { LinechartComponent } from '../../shared/components/charts/linechart/linechart.component';
import { WidgetComponent } from './components/widget/widget.component';
import { WidgetItemComponent } from './components/widget-item/widget-item.component';
import { BarchartComponent } from '../../shared/components/charts/barchart/barchart.component';
import { DoughnutComponent } from '../../shared/components/charts/doughnut/doughnut.component';

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
  declarations: [DashboardComponent,WidgetComponent,WidgetItemComponent],
  entryComponents:[PiechartComponent,LinechartComponent,BarchartComponent,DoughnutComponent]
})
export class DashboardModule { }
