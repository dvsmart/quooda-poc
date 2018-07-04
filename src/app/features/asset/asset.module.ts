import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesComponent } from '../Asset/components/properties/properties.component';
import { PropertyDetailComponent } from '../Asset/components/property-detail/property-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { AssetComponent } from './asset.component';

const routes: Routes = [
  { path: '', redirectTo: 'asset' },
  { path: 'properties', component: AssetComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PropertiesComponent, PropertyDetailComponent, AssetComponent]
})
export class AssetModule { }
