import { Component, OnInit, ViewChild, ElementRef, NgZone, Renderer, HostListener } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
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
    router.events.subscribe((event: RouterEvent) => {
      //this._navigationInterceptor(event)
    });
    this.watcher = media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      if (change.mqAlias == 'xs') {
        this.open = false;
      }
    });
  }

  toggle($event) {
    this.open = !this.open;
  }


  private _navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      // We wanna run this function outside of Angular's zone to
      // bypass change detection
      this.ngZone.runOutsideAngular(() => {
        // For simplicity we are going to turn opacity on / off
        // you could add/remove a class for more advanced styling
        // and enter/leave animation of the spinner
        this.renderer.setElementStyle(
          this.spinnerElement.nativeElement,
          'opacity',
          '1'
        )
      })
    }
    if (event instanceof NavigationEnd) {
      this._hideSpinner()
    }
    // Set loading state to false in both of the below events to
    // hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this._hideSpinner()
    }
    if (event instanceof NavigationError) {
      this._hideSpinner()
    }
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
