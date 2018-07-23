import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RisksComponent } from '@app/features/risk/components/risks/risks.component';
import { UncontrolledRisksComponent } from '@app/features/risk/components/uncontrolled-risks/uncontrolled-risks.component';
import { RiskDetailComponent } from '@app/features/risk/components/risk-detail/risk-detail.component';
import { ActionsComponent } from '@app/features/risk/components/actions/actions.component';
import { ActionDetailComponent } from '@app/features/risk/components/action-detail/action-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { RiskComponent } from '@app/features/risk/risk.component';

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
