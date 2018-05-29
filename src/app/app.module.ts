import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PageModule } from './pages/page.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidemenuComponent } from './_layout/sidemenu/sidemenu.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuService } from './services/menu.service';
import { SideChildmenuComponent } from './_layout/sidemenu/extra-menu-item.component';
import { RouterModule } from '@angular/router';
import { GenericService } from './services/generic.service';
import { AuthService } from './auth/auth.service';
import { MaterialModule } from './material.module';
import { SideuserComponent } from './_layout/sideuser/sideuser.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    SharedModule,
    PageModule,
    HttpClientModule,
    CommonModule,
    MaterialModule
  ],
  providers: [MenuService, GenericService],
  bootstrap: [AppComponent]
})
export class AppModule { }
