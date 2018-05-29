import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {

  name: string;

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.name = 'checklist-'+ id;
  }

}
