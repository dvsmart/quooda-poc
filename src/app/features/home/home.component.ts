import { Component, OnInit } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Subscription';
import { TableConfig } from '@app/shared/models/TableConfig';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  watcher: Subscription;
  activeMediaQuery = "";
  constructor(private media: ObservableMedia) {
  }
  ngOnInit() {
    this.watcher = this.media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      if (change.mqAlias == 'xs') {
        console.log(change.mqAlias);
      }
    });
  }

}
