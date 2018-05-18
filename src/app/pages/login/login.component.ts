import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  constructor(private router: Router,private authService: AuthService,private route: ActivatedRoute,) { }

  ngOnInit() {
    // reset login status
    //this.authService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
}

  onLogin(){
    var isAuthenticated = this.authService.authenticate();
    if(isAuthenticated){
      this.router.navigateByUrl(this.returnUrl);
    }
  }
}
