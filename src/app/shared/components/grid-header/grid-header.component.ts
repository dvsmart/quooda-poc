import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-grid-header',
  templateUrl: './grid-header.component.html',
  styleUrls: ['./grid-header.component.scss']
})
export class GridHeaderComponent implements OnInit {
  @Input() title: string;
  @Output() searchStr = new EventEmitter<string>();
  @Output() toggleFilter = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.toggleFilter.emit(true);
  }

}
