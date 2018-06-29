import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { FormatCellPipe } from './pipes/format-cell.pipe';
import { StyleCellDirective } from './directives/cell.directive';
import { FormdialogComponent } from './components/formdialog/formdialog.component';
import { DoughnutComponent } from './components/charts/doughnut/doughnut.component';
import { KeysPipe } from './pipes/enum-key.pipe';
import { MAT_DATE_LOCALE } from '@angular/material';
import { MinigridService } from './services/minigrid.service';
import { TableDialogComponent } from './components/table-dialog/table-dialog.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { ApiService } from './components/services/api.service';
import { ChartBaseComponent } from './components/charts/chart-base';

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
    ChartsModule,
    PiechartComponent,
    BarchartComponent,
    LinechartComponent,
    TabComponent,
    TilesComponent,
    KeysPipe,
    DatatableComponent,
    ChartBaseComponent
  ],
  providers: [ToasterService, LoadingService, CurrencyPipe, DatePipe, { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  entryComponents: [ConfirmmodalComponent, ToasterComponent],
  declarations: [
    ConfirmmodalComponent,
    PiechartComponent,
    BarchartComponent,
    LinechartComponent,
    TabComponent,
    TilesComponent,
    LoaderComponent,
    ToasterComponent,
    KeysPipe,
    FormatCellPipe,
    StyleCellDirective,
    FormdialogComponent,
    DoughnutComponent,
    TableDialogComponent,
    DatatableComponent,
    ChartBaseComponent]
})
export class SharedModule { }
