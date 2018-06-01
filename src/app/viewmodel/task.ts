export class Task{
    id: number;
    dataId:string;
    name:string;
    description:string;
    tasktype:TaskType;
    startDate?:Date;
    dueDate?:Date;
    status?: TaskStatus = TaskStatus.NotStarted;
    priority?: Priority = Priority.Low;
    addedBy:string;
    addedOn:Date;
    updatedBy?:string;
    updatedOn?:Date;
    comments?:Array<number>;
    documents?:Array<number>;
}

export enum TaskType{
    OneOff,
    Scheduled
}

export enum TaskStatus{
    NotStarted = 1,
    InProgress = 2,
    Completed = 3,
    OnHold = 4,
    Abandoned = 5
}

export enum Priority{
    Low = 0,
    Minor = 1,
    Moderate = 2,
    High = 3,
    Urgent = 4,
}

export class TaskCategory{
    id: number;
    name:string;
}

export class TaskComments{
    id:number;
    comment:string;
    updatedBy:string;
    updatedOn:Date;
}
