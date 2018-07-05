import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabformComponent } from './components/tabform/tabform.component';
import { FormfieldsComponent } from './components/formfields/formfields.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  exports:[TabformComponent,FormfieldsComponent],
  declarations: [TabformComponent, FormfieldsComponent]
})
export class CoreModule { }
