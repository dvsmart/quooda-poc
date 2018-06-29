import { Input, ViewChild, Component, HostBinding } from "@angular/core";
import { Menu } from "../../viewmodel/menuModel";
import { MenuService } from "../../services/menu.service";
import { Router } from "@angular/router";
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'appitem',
  templateUrl: 'extra-menu-item.component.html',
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ],
})
export class SideChildmenuComponent {
  @Input() item: any;
  selectedId: number;
  @ViewChild('childMenu') public childMenu;
  @Input() depth: number;
  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  constructor(private menuService: MenuService, public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  onItemSelected(item: Menu) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
    }
    if (item.children && item.children.length) {
      this.selectedId = item.children[0].parentId;
      if (this.selectedId == item.children[0].parentId && this.expanded) {
        this.expanded = !this.expanded
      } else {
        this.expanded = true;
      }
    }
  }
}
