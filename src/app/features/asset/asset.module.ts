import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesComponent } from '@app/features/asset/components/properties/properties.component';
import { PropertyDetailComponent } from '@app/features/asset/components/property-detail/property-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { AssetComponent } from '@app/features/asset/asset.component';
import { SharedModule } from '@app/shared/shared.module';

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
