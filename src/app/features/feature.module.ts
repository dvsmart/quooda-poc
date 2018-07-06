import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe} from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthGuard } from '../core/guards/auth.guard';
import { AuthService } from '../core/authentication/auth.service';
import { AppLayoutComponent } from '../layout/app-layout/app-layout.component';
import { CoreModule } from '../core/core.module';
import { SidemenuComponent } from '../layout/sidemenu/sidemenu.component';
import { SideuserComponent } from '../layout/sideuser/sideuser.component';
import { SideChildmenuComponent } from '../layout/sidemenu/extra-menu-item.component';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: '',
    component: AppLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', loadChildren: 'app/features/dashboard/dashboard.module#DashboardModule' },
      { path: 'profile', loadChildren: 'app/features/profile/profile.module#ProfileModule' },
      { path: 'task', loadChildren: 'app/features/task/task.module#TaskModule' },
      { path: 'checklist', loadChildren: 'app/features/checklist/checklist.module#ChecklistModule' },
      { path: 'asset', loadChildren: 'app/features/asset/asset.module#AssetModule' },
      { path: 'assessment', loadChildren: 'app/features/assessment/assessment.module#AssessmentModule' },
      { path: 'risks', loadChildren: 'app/features/risk/risk.module#RiskModule' },
      { path: 'settings', loadChildren: 'app/features/user/user.module#UserModule' },
      { path: 'settings', loadChildren: 'app/features/security/security.module#SecurityModule' }
    ]
  },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [
    CommonModule,
    NoopAnimationsModule,
    SharedModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  providers: [AuthGuard, AuthService, CookieService, CurrencyPipe, DatePipe],
  declarations: [
    HomeComponent,
    LoginComponent,
    AppLayoutComponent,
    SidemenuComponent,
    SideuserComponent,
    SideChildmenuComponent,
    NavbarComponent
  ],

})
export class FeatureModule { }
