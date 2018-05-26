import { Component, OnInit } from '@angular/core';
import { ListConfig } from '../../../viewmodel/listConfig';
import { TileConfig } from '../../../viewmodel/tileConfig';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {
  categories: ListConfig[] = [];
  tiles: TileConfig;
  constructor() { }

  ngOnInit() {
    let count = 10;

    for (let index = 0; index < count; index++) {
      const element = 'checklist - ' + index;
      this.categories.push({caption: element, iconName: 'folder',id: index,route:'/checklist/'+index});
    }
  }



}
