import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RisksComponent } from './components/risks/risks.component';
import { UncontrolledRisksComponent } from './components/uncontrolled-risks/uncontrolled-risks.component';
import { RiskDetailComponent } from './components/risk-detail/risk-detail.component';
import { ActionsComponent } from './components/actions/actions.component';
import { ActionDetailComponent } from './components/action-detail/action-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { RiskComponent } from './risk.component';

const routes: Routes = [
  { path: '', redirectTo: 'risks' },
  { path: 'all', component: RiskComponent },
  { path: 'uncontrolled', component: UncontrolledRisksComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RisksComponent, UncontrolledRisksComponent, RiskDetailComponent, ActionsComponent, ActionDetailComponent, RiskComponent]
})
export class RiskModule { }
