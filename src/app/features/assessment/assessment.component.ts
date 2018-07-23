import { Component, OnInit } from '@angular/core';
import { TableConfig } from '@app/shared/models/TableConfig';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {
  columnsConfig: TableConfig;
  constructor() { }

  ngOnInit() {
    this.columnsConfig = new TableConfig(5, false, true);
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
