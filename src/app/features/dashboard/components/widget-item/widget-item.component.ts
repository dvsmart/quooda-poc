import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Widget } from '../../model/WidgetConfiguration';
import { PiechartComponent } from '../../../../shared/components/charts/piechart/piechart.component';
import { BarchartComponent } from '../../../../shared/components/charts/barchart/barchart.component';
import { LinechartComponent } from '../../../../shared/components/charts/linechart/linechart.component';
import { DoughnutComponent } from '../../../../shared/components/charts/doughnut/doughnut.component';
import { BaseChartDirective } from 'ng2-charts';
import { ChartBaseComponent } from '../../../../shared/components/charts/chart-base';

@Component({
  selector: 'app-widget-item',
  templateUrl: './widget-item.component.html',
  styleUrls: ['./widget-item.component.scss']
})
export class WidgetItemComponent implements OnInit {
  @Input() widgetItem;

  @Input() data: any;

  @ViewChild('container', {read: ViewContainerRef}) private container: ViewContainerRef;
  readonly widgetMapper = {
    pie: PiechartComponent,
    bar: BarchartComponent,
    line: LinechartComponent,
    dough: DoughnutComponent,
  };

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.getComponentForWidgetType(this.widgetItem.type));
    const viewContainerRef = this.container;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<ChartBaseComponent>componentRef.instance).data = this.data;
  }

  private getComponentForWidgetType(widgetType) {
    return this.widgetMapper[widgetType];
  }

  ngOnDestroy(){
    this.container.clear();
  }
}
