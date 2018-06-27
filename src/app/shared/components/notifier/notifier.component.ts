import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { animate, state, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.scss'],
  animations: [
    trigger('state', [
      state('opened', style({ transform: 'translateY(0%)' })),
      state('void, closed', style({ transform: 'translateY(100%)', opacity: 0 })),
      transition('* => *', animate('100ms ease-in')),
    ])
  ],
  host: {
    '[@state]': 'state',
    '(@state.done)': 'onAnimationDone($event)',
  },
})
export class NotifierComponent {
  _message: string;

  @Input() message: string;

  constructor(private notifier: MatSnackBar) {
    this.notifier.openFromComponent(NotifierComponent,{
      duration:1000,
      announcementMessage: this.message
    })
  }

}
