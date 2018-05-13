export class Menu {
  caption: string;
  id: number;
  routerLink: string;
  hasSubMenu?: boolean = false;
  submenuItems: Menu[] = null;
  isVisible: boolean = true;
  cssClassName:string = "";
  iconClass:string= "";
}
