import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from '@app/features/task/service/task.service';
import { TaskFilterList } from '@app/features/task/model/TaskFilterList';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taskfilter',
  templateUrl: './taskfilter.component.html',
  styleUrls: ['./taskfilter.component.scss']
})
export class TaskfilterComponent implements OnInit {
  taskFilters: TaskFilterList[] = [];
  selectedFilter: any;
  caption: string;

  @Output() selected = new EventEmitter();
  constructor(private taskservice: TaskService,private router: Router) { }

  ngOnInit() {
    this.taskservice.getTaskStatus().subscribe(x => { x.forEach(ts => this.taskFilters.push(new TaskFilterList(ts.name, '/task/' + ts.name))); });
  }

  gotoDetail(filter: any): void {
    this.selected.emit(filter.caption);
  }

  onFilterchange(e: any) {
    this.selectedFilter = e.filterId;
    this.caption = e.caption;
  }
}
