import { NgModule,Component, OnInit, Input, ViewChild } from '@angular/core';
import { Menu } from '../../viewmodel/menuModel';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() items: Menu[];
  @ViewChild('childMenu') public childMenu;
  constructor() { }

  ngOnInit() {
  }

}
