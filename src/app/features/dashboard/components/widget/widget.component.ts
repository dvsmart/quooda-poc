import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../../model/WidgetConfiguration';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  @Input() widgets;

  constructor() { }

  ngOnInit() {
    
  }

}
