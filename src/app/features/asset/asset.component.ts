import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        'max-height': '500px', 'opacity': '1', 'visibility': 'visible'
      })),
      state('out', style({
        'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
      })),
      transition('in => out', [group([
        animate('400ms ease-in-out', style({
          'opacity': '0'
        })),
        animate('600ms ease-in-out', style({
          'max-height': '0px'
        })),
        animate('700ms ease-in-out', style({
          'visibility': 'hidden'
        }))
      ]
      )]),
      transition('out => in', [group([
        animate('1ms ease-in-out', style({
          'visibility': 'visible'
        })),
        animate('600ms ease-in-out', style({
          'max-height': '500px'
        })),
        animate('800ms ease-in-out', style({
          'opacity': '1'
        }))
      ]
      )])
    ])
  ]
})
export class AssetComponent implements OnInit {
  visible: boolean = false;
  animationState = 'out';
  constructor() { }

  ngOnInit() {
  }

  trigger() {
    debugger;
    this.animationState = this.animationState === 'out' ? 'in' : 'out';
  }
}
