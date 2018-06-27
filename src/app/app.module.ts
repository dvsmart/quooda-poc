import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MenuService } from './services/menu.service';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { FeatureModule } from './features/feature.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FeatureModule,
    HttpClientModule,
    CommonModule,
    MaterialModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
