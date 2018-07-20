import { Component, OnInit, Input } from '@angular/core';
import { SelectionModel } from '../../../../../node_modules/@angular/cdk/collections';
import { trigger, state, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-grid-selector',
  templateUrl: './grid-selector.component.html',
  styleUrls: ['./grid-selector.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition('in => out', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('1000ms ease-in-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition('out => in', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('1000ms ease-in-out', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class GridSelectorComponent implements OnInit {
  @Input() selection;

  selectedRow = new SelectionModel<any>(true);
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.selection !== undefined){
      this.selectedRow = this.selection;
    }
  }



}
