import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentsComponent } from '@app/features/assessment/components/assessments/assessments.component';
import { AssessmentDetailComponent } from '@app/features/assessment/components/assessment-detail/assessment-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { AssessmentComponent } from '@app/features/assessment/assessment.component';
import { SharedModule } from '@app/shared/shared.module';

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
