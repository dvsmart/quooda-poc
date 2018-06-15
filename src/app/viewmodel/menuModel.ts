export class Menu {
  caption: string;
  id: number;
  route: string;
  hasChildren?: boolean = false;
  childrens?: Menu[] = null;
  isVisible: boolean = true;
  cssClassName?:string;
  iconName?:string;
  parentId?:number;
  /**
   *
   */


  constructor() {
  }
}
