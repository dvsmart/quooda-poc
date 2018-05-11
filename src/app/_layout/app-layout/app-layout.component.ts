import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {
  ngOnInit(): void {
  }


  constructor(private router:Router) {

  }

  navigatetoAbout(){
    this.router.navigate(['/about']);
  }
}
