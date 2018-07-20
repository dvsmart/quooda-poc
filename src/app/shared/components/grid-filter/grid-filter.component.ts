import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, query, stagger, group } from '@angular/animations';

@Component({
  selector: 'app-grid-filter',
  templateUrl: './grid-filter.component.html',
  styleUrls: ['./grid-filter.component.scss']
})
export class GridFilterComponent implements OnInit {
  filterNavItems: any[];
  constructor() { }

  ngOnInit() {
    this.filterNavItems = [{caption: "Live",count:235, color: '#68da68'}, {caption: "New",count:15, color: '#e6e632'}, {caption: "Archived",count:16, color: '#ff0000b8'}];
  }

}
