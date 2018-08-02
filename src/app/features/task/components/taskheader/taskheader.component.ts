import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-taskheader',
  templateUrl: './taskheader.component.html',
  styleUrls: ['./taskheader.component.scss']
})
export class TaskheaderComponent implements OnInit {
  @Output() toggle = new EventEmitter<boolean>(false);
  constructor() { }

  ngOnInit() {
  }

  openSidenav(){
    this.toggle.emit(true);
  }

}
