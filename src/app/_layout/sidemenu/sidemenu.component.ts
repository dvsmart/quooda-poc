import { Component, OnInit, Input, ViewChild, ViewEncapsulation, HostBinding } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Menu } from '../../viewmodel/menuModel';
import { Observable } from 'rxjs/Observable';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class SidemenuComponent implements OnInit {
  menuItems: Menu[];
  menu: Observable<Menu[]>;
  @Input() items: Menu[];
  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: any;
  @Input() depth: number;
  constructor(private menuService: MenuService,public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit() {
    this.menuItems = this.menuService.getMenuItems();
    this.menu = this.menuService.getAll<Menu[]>();
  }

  onItemSelected(item: Menu) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }

}

