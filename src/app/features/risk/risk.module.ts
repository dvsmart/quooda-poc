import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RisksComponent } from './components/risks/risks.component';
import { UncontrolledRisksComponent } from './components/uncontrolled-risks/uncontrolled-risks.component';
import { RiskDetailComponent } from './components/risk-detail/risk-detail.component';
import { ActionsComponent } from './components/actions/actions.component';
import { ActionDetailComponent } from './components/action-detail/action-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RisksComponent, UncontrolledRisksComponent, RiskDetailComponent,  ActionsComponent, ActionDetailComponent]
})
export class RiskModule { }
