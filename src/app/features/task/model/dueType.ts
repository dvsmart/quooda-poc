export class DueType {
    caption: string;
    isVisible: boolean = true;
    dueInDays?: number;
    value?: any;

    constructor(caption: string, dueIn?: string) {
        this.setDuetypes(caption,dueIn);
    }

    setDuetypes(caption:string, dueIn:string) {
        switch (caption) {
            case 'all':
                this.caption = 'Show All';
                this.value = 'all';
                break;
            case 'overdue':
                this.caption = 'Overdue';
                this.value = 'overdue';
                break;
            case '':
                this.caption = dueIn ? 'Due in ' + dueIn + ' days' : "";
                this.value = dueIn;
                break;
            case 'dueToday':
                this.caption = 'Due Today';
                this.value = new Date;
                break;
            default:
                this.caption = 'Show All';
                break;
        }
    }

}

