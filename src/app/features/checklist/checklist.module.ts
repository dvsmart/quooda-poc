import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecklistComponent } from './checklist.component';
import { CategoryComponent } from './components/category/category.component';
import { TemplateComponent } from './components/template/template.component';
import { ChecklistService } from './service/checklist.service';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  { path: 'checklist', component: ChecklistComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'category/:id', component: ListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [ChecklistService],
  declarations: [ChecklistComponent, CategoryComponent, TemplateComponent, ListComponent]
})
export class ChecklistModule { }
