import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MenuService } from './services/menu.service';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './shared/material.module';
import { FeatureModule } from './features/feature.module';
import { FormatCellPipe } from './shared/pipes/format-cell.pipe';

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
