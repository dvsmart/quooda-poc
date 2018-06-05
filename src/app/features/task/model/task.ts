import { TaskType } from "./TypeEnum";
import { TaskStatus } from "./statusEnum";
import { Priority } from "./priority";

export class Task{
    id: number;
    dataId:string;
    name:string;
    description:string;
    tasktype?:TaskType;
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