import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tabform',
  templateUrl: './tabform.component.html',
  styleUrls: ['./tabform.component.scss']
})
export class TabformComponent implements OnInit {
  @Input() tabConfig;
  constructor() { }

  ngOnInit() {
   
  }

}
