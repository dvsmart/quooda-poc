import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesComponent } from './components/properties/properties.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { AssetComponent } from './asset.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', redirectTo: 'asset' },
  { path: 'properties', component: AssetComponent}
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PropertiesComponent, PropertyDetailComponent, AssetComponent]
})
export class AssetModule { }
