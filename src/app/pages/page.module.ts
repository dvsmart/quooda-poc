import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppLayoutComponent } from '../_layout/app-layout/app-layout.component';
import { SiteLayoutComponent } from '../_layout/site-layout/site-layout.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { SidemenuComponent } from '../_layout/sidemenu/sidemenu.component';
import { EditRiskComponent } from './dashboard/widget/editrisk.component';
import { SideChildmenuComponent } from '../_layout/sidemenu/extra-menu-item.component';
import { AuthGuard } from '../services/auth.guard';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: '',
    component: AppLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule' },
      { path: 'profile', component: ProfileComponent },
      { path: 'about', component: AboutComponent },
      { path: '', loadChildren: 'app/pages/custom-entity-page/custom-entity-page.module#CustomEntityPageModule' },
    ]
  },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules}),
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    CoreModule
  ],
  providers: [AuthGuard, AuthService, CookieService],
  declarations: [HomeComponent, AppLayoutComponent, LoginComponent, AboutComponent, ProfileComponent, SidemenuComponent,
    EditRiskComponent, SideChildmenuComponent],
  entryComponents: [EditRiskComponent]
})
export class PageModule { }
