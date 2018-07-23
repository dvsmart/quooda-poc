import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { Widget } from '@app/features/dashboard/model/WidgetConfiguration';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  widgetConfig: Widget[];
  constructor() { 
  }

  ngOnInit() {
    this.widgetConfig = [
      {    title: 'Risks Summary',rows:1,cols: 1,type: 'pie'  },
      {    title: 'Compliance Summary',rows:1,cols: 1 ,type: 'bar' },
      {    title: 'Risk Assessment Summary',rows:1,cols: 1 ,type: 'line' },
      {    title: 'KPI Compliance Summary',rows:1,cols: 1 ,type: 'dough' }
    ];
  }

}
