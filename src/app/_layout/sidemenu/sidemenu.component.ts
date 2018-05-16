import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Menu } from '../../viewmodel/menuModel';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  menuItems: Menu[];
 @Input() items: any;
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuItems = this.menuService.getMenuItems();
  }

}
