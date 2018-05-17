import { Input, ViewChild, Component } from "@angular/core";
import { Menu } from "../../viewmodel/menuModel";

@Component({
  selector: 'appitem',
  templateUrl: 'extra-menu-item.component.html',
})
export class SideChildmenuComponent {
  @Input() items: Menu[];
  @ViewChild('childMenu') public childMenu;
  constructor() { }
}

