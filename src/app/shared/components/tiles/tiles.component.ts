import { Component, OnInit, Input } from '@angular/core';
import { TileConfig } from '../../../viewmodel/tileConfig';
import { ListConfig } from '../../../viewmodel/listConfig';


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
