import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesComponent } from '../Asset/components/properties/properties.component';
import { PropertyDetailComponent } from '../Asset/components/property-detail/property-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PropertiesComponent, PropertyDetailComponent]
})
export class AssetModule { }
