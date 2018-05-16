import { Injectable } from '@angular/core';

import { Menu } from '../viewmodel/menuModel';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MenuService {

  menuList: Menu[];
  constructor(private http: HttpClient) {
  }

  getMenuItems():  any {
    let items: any[] = [
      { caption: 'Home', id: 1, route: '/home',iconName:'home' },
      { caption: 'Dashboard', id: 2, route: '/dashboard', iconName:'dashboard' },
      { caption: 'Assets', id: 2, route: '/dashboard', iconName:'dashboard' },
      { caption: 'Assessments', id: 3, route: '/home', iconName:'home' },
      {
        caption: 'Risks', id: 4, route: '/home', hasChildren: true,
        children: [
          { caption: 'Controlled Risks', id: 7, route: "['/home']" },
          { caption: 'Uncontrolled Risks', id: 7, route: "['/home']" }], iconName:'home'
      },
      { caption: 'Checklists', id: 5, route: "['/home']", iconName:'home' },
      {
        caption: 'Compliance', id: 6, route: "['/home']", hasChildren: true,
        children: [
          { caption: 'RAG Status', id: 7, route: "['/home']" },
          { caption: 'Summary', id: 7, route: "['/home']" }], iconName:'home'
      },
    ];
    return items;
  }

}


