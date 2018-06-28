import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppLayoutComponent } from '../_layout/app-layout/app-layout.component';
import { AuthGuard } from '../auth/auth.guard';
import { AuthService } from '../auth/auth.service';
import { SidemenuComponent } from '../_layout/sidemenu/sidemenu.component';
import { SideChildmenuComponent } from '../_layout/sidemenu/extra-menu-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../_layout/navbar/navbar.component';
import { CookieService } from 'ngx-cookie-service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SideuserComponent } from '../_layout/sideuser/sideuser.component';
import { PiechartComponent } from '../shared/components/charts/piechart/piechart.component';
import { LinechartComponent } from '../shared/components/charts/linechart/linechart.component';

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
      { path: 'task', loadChildren: 'app/features/task/task.module#TaskModule'},
      { path: 'checklist', loadChildren: 'app/features/checklist/checklist.module#ChecklistModule' }
    ]
  },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NoopAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  providers: [AuthGuard, AuthService, CookieService],
  declarations: [HomeComponent, 
    LoginComponent, NavbarComponent, AppLayoutComponent, SidemenuComponent, SideChildmenuComponent, SideuserComponent],
    
})
export class FeatureModule { }
