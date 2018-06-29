import {Component, Input} from '@angular/core';
@Component({
  selector: 'app-chart-base',
  template: '',
})
export class ChartBaseComponent {
  @Input() data: any;
}