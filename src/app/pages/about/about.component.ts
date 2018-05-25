import { Component, OnInit } from '@angular/core';
import { ListConfig} from '../../viewmodel/listConfig';
import { TileConfig } from '../../viewmodel/tileConfig';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  tileConfig: TileConfig;
  categories: ListConfig[] = [];
  constructor() {
   }

  ngOnInit() {
    let count = 10;

    for (let index = 0; index < count; index++) {
      const element = 'checklist - ' + index;
      this.categories.push({caption: element, iconName: 'folder',id: index});
    }
  }

}
