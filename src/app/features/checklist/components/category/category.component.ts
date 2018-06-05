import { Component, OnInit } from '@angular/core';
import { ListConfig } from '../../model/list';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: ListConfig[] = [];
  constructor() { }

  ngOnInit() {
    let count = 10;
    for (let index = 0; index < count; index++) {
      const element = 'checklist Category - ' + index;
      this.categories.push({caption: element, iconName: 'folder',id: index,route:'/category/'+index});
    }
  }

}
