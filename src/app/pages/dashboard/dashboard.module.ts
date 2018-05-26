import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { WidgetComponent } from './widget/widget.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../UI/material.module';

const routes: Routes = [{
  path: '', component: DashboardComponent
}];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  declarations: [DashboardComponent, WidgetComponent]
})
export class DashboardModule { }
