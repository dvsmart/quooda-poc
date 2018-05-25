import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomEntityPageComponent } from './custom-entity-page.component';
import { CoreModule } from '../../core/core.module';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CustomComponent } from './custom/custom.component';

const routes: Routes = [
  {  path: '', component: CustomComponent},
  {  path: 'checklist/:id', component: CustomEntityPageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [CustomEntityPageComponent, CustomComponent]
})
export class CustomEntityPageModule { }
