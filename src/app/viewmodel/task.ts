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
    OneOff = 0,
    Scheduled = 1    
}

export enum TaskStatus{
    NotStarted = 0,
    InProgress = 1,
    Completed = 2,
    OnHold = 3,
    Abandoned = 4
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

