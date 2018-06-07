export class TaskFilterList {
    caption: string;
    route?: string;
    iconName?: string;
    sortOrder?: number
    filterId?:any
    /**
     *
     */
    constructor(caption: string, route?: string, icon?: string) {
        this.route = route;
        this.filterId = caption;
        this.getTaskFilters(caption, icon);
    }

    getTaskFilters(caption: string, icon?: string) {
        switch (caption) {
            case 'NotStarted':
                this.iconName = icon ? icon : 'schedule';
                this.caption = 'Not Started';
                break;
            case 'InProgress':
                this.iconName = icon ? icon : 'error';
                this.caption = 'In Progress';
                break;
            case 'Completed':
                this.iconName = icon ? icon : 'check';
                this.caption = 'Completed';
                break;
            case 'OnHold':
                this.iconName = icon ? icon : 'stop';
                this.caption = 'On Hold';
                break;
            case 'Abandoned':
                this.iconName = icon ? icon : 'delete';
                this.caption = 'Abandoned';
                break;
            default:
                break;
        }
    }
}