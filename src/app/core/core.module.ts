import { TabformComponent } from '@app/core/components/tabform/tabform.component';
import { FormfieldsComponent } from '@app/core/components/formfields/formfields.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '@app/shared/material.module';
import { NgModule } from '@angular/core';
import { MenuService } from '@app/core/SingletonServices/menu.service';
import { AuthService } from '@app/core/authentication/auth.service';
import { AuthGuard } from '@app/core/guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


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
