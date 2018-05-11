import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageModule } from './pages/page.module';

const routes: Routes = [];

@NgModule({
  imports: [PageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
