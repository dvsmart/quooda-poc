import { Component, OnInit, Input } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { trigger, state, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-grid-page',
  templateUrl: './grid-page.component.html',
  styleUrls: ['./grid-page.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(100%)', opacity: 0}),
        animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translateX(0)', opacity: 1}),
        animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
      ])
    ])
  ]
})
export class GridPageComponent implements OnInit {
  @Input() tableConfig;
  @Input() title: string;
  animationState = 'out';
  selection = new SelectionModel<any>(true, [], true);
  constructor() { }

  ngOnInit() {
  }

  selectedValue(selection) {
    this.selection = selection;
  }


}
