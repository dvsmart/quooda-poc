export class Menu {
  caption: string;
  id: number;
  route: string;
  hasChildren?: boolean = false;
  children?: Menu[] = null;
  isVisible: boolean = true;
  cssClassName?:string;
  iconName?:string;
}
