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
        animate('1000ms cubic-bezier(0.1, 0.7, 1.0, 0.1)')
      ),
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class SidemenuComponent implements OnInit {
  @Input() isOpened;

  menuItems: Menu[];
  menu: Observable<Menu[]>;
  @Input() items: Menu[];
  expanded: boolean;
  selectedId: number;
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
    debugger;
    //this.expanded = !this.expanded;
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
    }
    if (item.children && item.children.length) {
      this.selectedId = item.children[0].parentId;
      if(this.selectedId == item.children[0].parentId && this.expanded){
        this.expanded = !this.expanded
      }else{
        this.expanded = true;
      }
    }
  }

}

