import { Component, OnInit } from '@angular/core';
import { TableConfig } from '@app/shared/models/TableConfig';
import { MessageService, Payload } from '@app/shared/services/message.service';
import { Subscription } from 'rxjs';
import { AssessmentService } from '@app/features/assessment/service/assessment.service';
import { BaseComponent } from '@app/shared/models/BaseComponent';
import { trigger, transition, animate, style } from '@angular/animations'

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('100ms ease-in', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})
export class AssessmentComponent extends BaseComponent {
  columnsConfig: TableConfig;
  showEditForm: boolean;
  formData: any;
  constructor(messageservice: MessageService, private assessmentservice: AssessmentService) {
    super(messageservice);
  }

   addRecord() {
    this.showEditForm = true;
    this.formData = null;
  }

  close() {
    this.showEditForm = false;
  }

  edit(record) {
    debugger;
    this.assessmentservice.getSingle(record).subscribe(x => {
      this.formData = x;
      if (x != null) {
        this.showEditForm = true;
      }
    }
    );
  }

  ngOnInit() {
    this.columnsConfig = new TableConfig('Assessments', 5, false, true);
    this.columnsConfig.dataUrl = 'Assessment';
    const columns =
      [
        {
          primaryKey: 'dataId',
          header: 'ID'
        },
        {
          primaryKey: 'assessmentType',
          header: 'Assessment Type'
        },
        {
          primaryKey: 'assessmentScope',
          header: 'Scope'
        },
        {
          primaryKey: 'reference',
          header: 'Reference'
        },
        {
          primaryKey: 'addedDate',
          header: 'Added On',
          format: 'date'
        }
      ];
    this.columnsConfig.columns = columns;
  }

}
