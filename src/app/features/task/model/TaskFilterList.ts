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
        this.caption = caption;
        this.getTaskFilters(caption, icon);
    }

    getTaskFilters(caption: string, icon?: string) {
        switch (caption) {
            case 'Not Started':
                this.iconName = icon ? icon : 'schedule';
                break;
            case 'In Progress':
                this.iconName = icon ? icon : 'error';
                break;
            case 'Completed':
                this.iconName = icon ? icon : 'check';
                break;
            case 'On Hold':
                this.iconName = icon ? icon : 'stop';
                break;
            case 'Cancelled':
                this.iconName = icon ? icon : 'delete';
                break;
            default:
                break;
        }
    }
}
