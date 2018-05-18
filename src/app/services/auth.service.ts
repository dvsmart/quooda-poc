import { Injectable, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthService {
  constructor(private cookieService: CookieService) { }

  isLoggedIn(): boolean {
    if(this.cookieService.get('token') != null && this.cookieService.get('token') == 'authenticated'){
      return true;
    }else{
      return false;
    }
  }

  authenticate() : boolean{
    this.cookieService.set('token','authenticated');
    return true;
  }

  logout(){
    this.cookieService.delete('token');
  }
}
