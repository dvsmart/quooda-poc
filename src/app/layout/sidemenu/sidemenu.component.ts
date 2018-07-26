import { Component, OnInit, Input, ViewChild, ViewEncapsulation, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { MenuService } from '@app/core/SingletonServices/menu.service';
import { Menu } from '@app/core/models/menuModel';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition('expanded <=> collapsed',
        animate('200ms cubic-bezier(0.1, 0.7, 1.0, 0.1)')
      ),
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class SidemenuComponent implements OnInit {
  @Input() isOpened;

  menu: Menu[];
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
    this.menuService.getMenuItems().subscribe(x=> this.menu = x);
  }

  onItemSelected(item: Menu) {
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

