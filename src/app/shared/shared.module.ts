import {NgModule} from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
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
import { FormatCellPipe } from './pipes/format-cell.pipe';
import { StyleCellDirective } from './directives/cell.directive';
import { FormdialogComponent } from './components/formdialog/formdialog.component';
import { DoughnutComponent } from './components/charts/doughnut/doughnut.component';
import { KeysPipe } from './pipes/enum-key.pipe';

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
    MinigridComponent,
    KeysPipe
  ],
  providers:[CustomerService,ToasterService, LoadingService, CurrencyPipe, DatePipe],
  entryComponents:[ConfirmmodalComponent,ToasterComponent],
  declarations: [
      GridComponent,
      ConfirmmodalComponent,
      PiechartComponent,
      BarchartComponent,
      LinechartComponent,
      TabComponent,
      TilesComponent,
      LoaderComponent,
      ToasterComponent,
      MinigridComponent,
      KeysPipe,
      FormatCellPipe,
      StyleCellDirective,
      FormdialogComponent,
      DoughnutComponent ]
})
export class SharedModule { }
