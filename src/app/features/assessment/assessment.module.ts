import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentsComponent } from './components/assessments/assessments.component';
import { AssessmentDetailComponent } from './components/assessment-detail/assessment-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { AssessmentComponent } from './assessment.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [{
  path: '', component: AssessmentComponent
}];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AssessmentsComponent, AssessmentDetailComponent, AssessmentComponent]
})
export class AssessmentModule { }
