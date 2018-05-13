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
      { caption: 'Home', id: 1, routerLink: '/home',iconClass:'home' },
      { caption: 'Dashboard', id: 2, routerLink: '/dashboard', iconClass:'dashboard' },
      { caption: 'Assets', id: 2, routerLink: '/dashboard', iconClass:'dashboard' },
      { caption: 'Assessments', id: 3, routerLink: '/home', iconClass:'home' },
      {
        caption: 'Risks', id: 4, routerLink: '/home', hasSubMenu: true,
        submenuItems: [
          { caption: 'Controlled Risks', id: 7, routerLink: "['/home']" },
          { caption: 'Uncontrolled Risks', id: 7, routerLink: "['/home']" }], iconClass:'home'
      },
      { caption: 'Checklists', id: 5, routerLink: "['/home']", iconClass:'home' },
      {
        caption: 'Compliance', id: 6, routerLink: "['/home']", hasSubMenu: true,
        submenuItems: [
          { caption: 'Controlled Risks', id: 7, routerLink: "['/home']" },
          { caption: 'Uncontrolled Risks', id: 7, routerLink: "['/home']" }], iconClass:'home'
      },
    ];
    return items;
  }

}


