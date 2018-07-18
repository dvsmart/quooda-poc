import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-page',
  templateUrl: './grid-page.component.html',
  styleUrls: ['./grid-page.component.scss']
})
export class GridPageComponent implements OnInit {
  @Input() tableConfig;
  constructor() { }

  ngOnInit() {
  }

}
