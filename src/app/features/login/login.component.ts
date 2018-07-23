import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@app/core/authentication/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  form: FormGroup;
  submitted: boolean = false;
  errorMessage: string;
  constructor(private router: Router, private authService: AuthService, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.form = this.createLoginForm(formBuilder);
  }

  private createLoginForm(formBuilder: FormBuilder) {
    return formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  ngOnInit() {
    // reset login status
    //this.authService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  onLogin() {
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    var isAuthenticated = this.authService.authenticate(this.form.value);
    if (isAuthenticated) {
      this.router.navigateByUrl(this.returnUrl);
      //return true;
    }else{
      this.loading = false;
      this.errorMessage = "Invalid account";
    }

    // .subscribe(data => {
    //   this.loading = false;
    //   this.router.navigateByUrl(this.returnUrl);
    // },
    //   errorResponse => {
    //     this.errorMessage = errorResponse.error.error_description;
    //     this.loading = false;
    //   });
  }

  hasFieldError(fieldName: string): boolean {
    return this.form.controls[fieldName].invalid && (this.submitted || this.form.controls[fieldName].touched);
  }
}
