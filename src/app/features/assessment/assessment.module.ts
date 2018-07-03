import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentsComponent } from '../Assessment/components/assessments/assessments.component';
import { AssessmentDetailComponent } from '../Assessment/components/assessment-detail/assessment-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AssessmentsComponent, AssessmentDetailComponent]
})
export class AssessmentModule { }
