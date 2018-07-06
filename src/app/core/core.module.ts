import { TabformComponent } from './components/tabform/tabform.component';
import { FormfieldsComponent } from './components/formfields/formfields.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { NgModule } from '@angular/core';
import { MenuService } from './SingletonServices/menu.service';
import { AuthService } from './authentication/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';
import { CommonModule } from '../../../node_modules/@angular/common';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [MenuService, AuthService, AuthGuard]
})
export class CoreModule { }
