import { Injectable } from '@angular/core';
import { Menu } from '../viewmodel/menuModel';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';

@Injectable()
export class MenuService extends GenericService<Menu> {

  menuList: Menu[];
  endPoint: string;
  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      'menu');
  }

  


  getMenuItems():  any {
    let items: any[] = [
      { caption: 'Home', id: 1, route: '/home',iconName:'home' },
      { caption: 'Dashboard', id: 2, route: '/dashboard', iconName:'dashboard' },
      { caption: 'Profile', id: 2, route: '/profile', iconName:'account_circle' },
      { caption: 'Checklist', id: 5, route: '/checklist', iconName:'home' },
      { caption: 'Assets', id: 2, route: '/dashboard', iconName:'dashboard' },
      { caption: 'Tasks', id: 2, route: '/task', iconName:'dashboard' },
      { caption: 'Assessments', id: 3, route: '/home', iconName:'home' },
      // {
      //   caption: 'Risks', id: 4, route: '/home', hasChildren: true, iconName:'home',
      //   children: [
      //     { caption: 'Controlled Risks', id: 7, route: "['/home']", parentId: 4,iconName:'home' },
      //     { caption: 'Uncontrolled Risks', id: 7, route: "['/home']",parentId: 4,hasChildren: true,
      //     children: [
      //       { caption: 'Controlled Risks 2', id: 7, route: "['/home']", parentId: 4 },
      //       { caption: 'Uncontrolled Risks 2', id: 7, route: "['/home']",parentId: 4,hasChildren: true,
      //       children: [
      //         { caption: 'Controlled Risks 3', id: 7, route: "['/home']", parentId: 4 },
      //         { caption: 'Uncontrolled Risks 3', id: 7, route: "['/home']",parentId: 4 }] }] }]
      // },
      // {
      //   caption: 'Compliance', id: 6, route: "['/home']", hasChildren: true,
      //   children: [
      //     { caption: 'RAG Status', id: 7, route: "['/home']", parentId:6 ,iconName:'home'},
      //     { caption: 'Summary', id: 7, route: "['/home']", parentId:6 ,iconName:'home'}], iconName:'home'
      // },
    ];
    return items;
  }

}


