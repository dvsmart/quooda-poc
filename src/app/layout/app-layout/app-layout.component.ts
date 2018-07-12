import { Component, OnInit, ViewChild, ElementRef, NgZone, Renderer } from '@angular/core';
import { RouterEvent, NavigationStart, Router, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {
  watcher: Subscription;
  activeMediaQuery = "";
  mode:string = 'side';
  ngOnInit(): void {
  }

  @ViewChild('sidenav') sidenav: MatSidenav;
  open: boolean = true;

  @ViewChild('spinnerElement')


  spinnerElement: ElementRef

  constructor(private router: Router,
    private ngZone: NgZone,
    private renderer: Renderer,
    media: ObservableMedia
  ) {
    router.events.subscribe(() => {
    });
    this.watcher = media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      if (change.mqAlias == 'xs' || change.mqAlias == 'sm' || change.mqAlias == 'md') {
        this.open = false;
        this.mode = 'over';
      }
    });
  }

  toggle() {
    this.open = !this.open;
  }



  private _hideSpinner(): void {
    // We wanna run this function outside of Angular's zone to
    // bypass change detection,
    this.ngZone.runOutsideAngular(() => {
      // For simplicity we are going to turn opacity on / off
      // you could add/remove a class for more advanced styling
      // and enter/leave animation of the spinner
      this.renderer.setElementStyle(
        this.spinnerElement.nativeElement,
        'opacity',
        '0'
      )
    })
  }

  navigatetoAbout() {
    this.router.navigate(['/about']);
  }


}
