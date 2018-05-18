import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {
  ngOnInit(): void {
  }


  constructor(private router:Router,private authservice: AuthService) {

  }

  navigatetoAbout(){
    this.router.navigate(['/about']);
  }

  logout(){
    this.authservice.logout();
    this.router.navigate(['/login']);
  }
}
