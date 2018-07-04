import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentsComponent } from '../Assessment/components/assessments/assessments.component';
import { AssessmentDetailComponent } from '../Assessment/components/assessment-detail/assessment-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { AssessmentComponent } from './assessment.component';

const routes: Routes = [{
  path: '', component: AssessmentComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AssessmentsComponent, AssessmentDetailComponent, AssessmentComponent]
})
export class AssessmentModule { }
