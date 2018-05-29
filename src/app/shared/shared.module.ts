import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './components/grid/grid.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../services/customerService';
import { ConfirmmodalComponent } from './components/confirmmodel/confirmmodel.component';
import { PiechartComponent } from './components/charts/piechart/piechart.component';
import { ChartsModule } from 'ng2-charts';
import { BarchartComponent } from './components/charts/barchart/barchart.component';
import { LinechartComponent } from './components/charts/linechart/linechart.component';
import { TabComponent } from './components/tab/tab.component';
import { TilesComponent } from './components/tiles/tiles.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { MaterialModule } from '../material.module';
import { ToasterService } from './services/toaster.service';
import { LoadingService } from './services/loading.service';
import { ToasterComponent } from './components/toaster/toaster.component';
import { MinigridComponent } from './components/minigrid/minigrid.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    GridComponent,
    ChartsModule,
    PiechartComponent,
    BarchartComponent,
    LinechartComponent,
    TabComponent,
    TilesComponent,
    MinigridComponent
  ],
  providers:[CustomerService,ToasterService, LoadingService],
  entryComponents:[ConfirmmodalComponent,ToasterComponent],
  declarations: [GridComponent,ConfirmmodalComponent, PiechartComponent, BarchartComponent, LinechartComponent, TabComponent, TilesComponent, LoaderComponent, ToasterComponent, MinigridComponent]
})
export class SharedModule { }
