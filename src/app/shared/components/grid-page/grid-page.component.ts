import { Component, OnInit, Input, ViewChild, Output, EventEmitter} from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

import { MatSidenav } from '@angular/material';
import { TableConfig } from '@app/shared/models/TableConfig';

@Component({
  selector: 'app-grid-page',
  templateUrl: './grid-page.component.html',
  styleUrls: ['./grid-page.component.scss'],
  
})
export class GridPageComponent implements OnInit {
  @Input() tableConfig : TableConfig;

  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor() {}

  ngOnInit() {}

  togglefiltersidenav() {
    this.sidenav.toggle();
  }
}
