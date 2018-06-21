
export class Task{
    id: number;
    dataId:string;
    name:string;
    description:string;
    tasktype?:string;
    startDate?:Date;
    dueDate?:Date;
    status?: string;
    priority?: string;
    addedBy:string;
    addedOn:Date;
    updatedBy?:string;
    updatedOn?:Date;
    comments?:Array<number>;
    documents?:Array<number>;
}