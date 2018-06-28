
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

// this.taskservice.getTasksData().subscribe(x =>
//     x.reduce(function (r, a) {
//       r[a.status] = r[a.status] || [];
//       r[a.status].push(a);
//       return r;
//     }, Object.create(null))
//   )
  // Object.keys(a).forEach(k=>{
  //   this.chartData.push({
  //     label: k,
  //     data:a[k].length
  //   })
  // })