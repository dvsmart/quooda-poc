import { Component, OnInit, Input } from '@angular/core';
import { TileConfig } from '@app/viewmodel/tileConfig';
import { ListConfig } from '@app/viewmodel/listConfig';


@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss']
})
export class TilesComponent implements OnInit {
 @Input() config;
  constructor() {
   }

  ngOnInit() {
  }

}
