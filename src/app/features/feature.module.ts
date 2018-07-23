import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe} from '@angular/common';
import { HomeComponent } from '@app/features/home/home.component';
import { LoginComponent } from '@app/features/login/login.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from '@app/core/guards/auth.guard';
import { AuthService } from '@app/core/authentication/auth.service';
import { AppLayoutComponent } from '@app/layout/app-layout/app-layout.component';
import { SidemenuComponent } from '@app/layout/sidemenu/sidemenu.component';
import { SideuserComponent } from '@app/layout/sideuser/sideuser.component';
import { SideChildmenuComponent } from '@app/layout/sidemenu/extra-menu-item.component';
import { NavbarComponent } from '@app/layout/navbar/navbar.component';
import { SharedModule } from '@app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    BrowserAnimationsModule,
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
