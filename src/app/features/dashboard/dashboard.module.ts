import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '@app/features/dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '@app/shared/material.module';
import { PiechartComponent } from '@app/shared/components/charts/piechart/piechart.component';
import { LinechartComponent } from '@app/shared/components/charts/linechart/linechart.component';
import { WidgetComponent } from '@app/features/dashboard/components/widget/widget.component';
import { WidgetItemComponent } from '@app/features/dashboard/components/widget-item/widget-item.component';
import { BarchartComponent } from '@app/shared/components/charts/barchart/barchart.component';
import { DoughnutComponent } from '@app/shared/components/charts/doughnut/doughnut.component';
import { SharedModule } from '@app/shared/shared.module';

const routes: Routes = [{
  path: '', component: DashboardComponent
}];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent,WidgetComponent,WidgetItemComponent],
  entryComponents:[PiechartComponent,LinechartComponent,BarchartComponent,DoughnutComponent]
})
export class DashboardModule { }
