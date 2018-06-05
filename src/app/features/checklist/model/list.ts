export class ListConfig{
    id:number;
    caption:string;
    route?:string;
    iconName?:string;
    canEdit?:boolean = false;
    canDelete?:boolean = false;
    addedOn?:Date = new Date;
    addedBy?:string = 'vijay';
}