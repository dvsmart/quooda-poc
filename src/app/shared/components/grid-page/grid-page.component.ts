import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

import { MatSidenav } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-grid-page',
  templateUrl: './grid-page.component.html',
  styleUrls: ['./grid-page.component.scss'],
  
})
export class GridPageComponent implements OnInit {
  @Input() tableConfig;
  @Input() title: string;
  animationState = 'out';
  selectedGridRow: SelectionModel<any>;

  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor() { }

  ngOnInit() {
  }

  selectedValue(selectedRow) {
    this.selectedGridRow = selectedRow;
  }

  togglefiltersidenav() {
    this.sidenav.toggle();
  }

}
