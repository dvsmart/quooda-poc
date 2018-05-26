import { Injectable } from '@angular/core';
import { ListConfig } from '../viewmodel/listConfig';

@Injectable()
export class CustomService {

  constructor() { }

  getCategories(): ListConfig[] {
    let count = 10;
    const categories = [];
    for (let index = 0; index < count; index++) {
      const element = 'checklist - ' + index;
      categories.push({caption: element, iconName: 'folder',id: index,route:'/checklist/'+index});
      return categories;
    }
  }

  getCustomEntity(){

  }

}
