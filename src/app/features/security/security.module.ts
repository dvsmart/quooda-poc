import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureAccessControlComponent } from '@app/features/security/components/feature-access-control/feature-access-control.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'settings' },
  { path: 'featureAccessControl', component: FeatureAccessControlComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FeatureAccessControlComponent]
})
export class SecurityModule { }
