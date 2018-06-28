import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { Chart } from '../../shared/models/chart';
import { WidgetDirective } from '../../shared/directives/widget-host';
import { PiechartComponent } from '../../shared/components/charts/piechart/piechart.component';
import { LinechartComponent } from '../../shared/components/charts/linechart/linechart.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  chartData: Chart[] = [];
  currentAdIndex = 1;

  @ViewChild(WidgetDirective) widgetHost: WidgetDirective;
  @ViewChild('messagecontainer', { read: ViewContainerRef }) entry;

  cards = [
    { title: 'Risks Assessment Summary', cols: 2, rows: 1,chartName:'<app-piechart [data]="chartData"></app-piechart>' },
    { title: 'Compliance Summary', cols: 1, rows: 1,chartName:'<app-barchart></app-barchart>' },
    { title: 'Incidents Summary', cols: 1, rows: 2,chartName:' <app-linechart></app-linechart>' },
    { title: 'Live Risks', cols: 1, rows: 1,chartName:'<app-barchart></app-barchart>' }
  ];
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(LinechartComponent);

    const contRef = this.entry;

    contRef.clear();

    let componentRef = contRef.createComponent(componentFactory);
    componentRef.changeDetectorRef.detectChanges();
    //(<PiechartComponent>componentRef.instance).data = this.chartData;
  }

  loadComponent() {
    // debugger;

    // let componentFactory = this.componentFactoryResolver.resolveComponentFactory(PiechartComponent);

    // const contRef = this.yourComponentHost;

    // contRef.clear();

    // let componentRef = contRef.createComponent(componentFactory);
    // (<PiechartComponent>componentRef.instance).data = this.chartData;
  }





}
