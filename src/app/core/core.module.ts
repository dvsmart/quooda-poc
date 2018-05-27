import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabformComponent } from './components/tabform/tabform.component';
import { SharedModule } from '../shared/shared.module';
import { FormfieldsComponent } from './components/formfields/formfields.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  exports:[TabformComponent,FormfieldsComponent],
  declarations: [TabformComponent, FormfieldsComponent]
})
export class CoreModule { }
