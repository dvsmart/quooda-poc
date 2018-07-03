import { Component } from '@angular/core';
import { ChartBaseComponent } from '../chart-base';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss']
})
export class DoughnutComponent extends ChartBaseComponent {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
