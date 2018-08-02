import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "@app/shared/material.module";
import { MinigridService } from "@app/shared/services/minigrid.service";
import { LoadingService } from "@app/shared/services/loading.service";
import { ToasterService } from "@app/shared/services/toaster.service";
import { PiechartComponent } from "@app/shared/components/charts/piechart/piechart.component";
import { DoughnutComponent } from "@app/shared/components/charts/doughnut/doughnut.component";
import { BarchartComponent } from "@app/shared/components/charts/barchart/barchart.component";
import { LinechartComponent } from "@app/shared/components/charts/linechart/linechart.component";
import { ConfirmmodalComponent } from "@app/shared/components/confirmmodel/confirmmodel.component";
import { DatatableComponent } from "@app/shared/components/datatable/datatable.component";
import { FormdialogComponent } from "@app/shared/components/formdialog/formdialog.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormatCellPipe } from "@app/shared/pipes/format-cell.pipe";
import { TableDialogComponent } from "@app/shared/components/table-dialog/table-dialog.component";
import { GridPageComponent } from "@app/shared/components/grid-page/grid-page.component";
import { GridFilterComponent } from "@app/shared/components/grid-filter/grid-filter.component";
import { GridHeaderComponent } from "@app/shared/components/grid-header/grid-header.component";
import { GridSelectorComponent } from "@app/shared/components/grid-selector/grid-selector.component";
import { DeleteConfirmDialogComponent } from "@app/shared/components/delete-confirm-dialog/delete-confirm-dialog.component";
import { ToasterComponent } from "@app/shared/components/toaster/toaster.component";
import { MessageService } from "@app/shared/services/message.service";
import { SidebarComponent } from "@app/shared/components/sidebar/sidebar.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  exports:[
    FlexLayoutModule,
    PiechartComponent,
    LinechartComponent,
    DoughnutComponent,
    BarchartComponent,
    ConfirmmodalComponent,
    DatatableComponent,
    FormdialogComponent,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableDialogComponent,
    GridPageComponent,
    SidebarComponent
  ],
  providers: [MinigridService,LoadingService,ToasterService,MessageService],
  declarations:[
    PiechartComponent,
    LinechartComponent,
    DoughnutComponent,
    BarchartComponent,
    ConfirmmodalComponent,
    DatatableComponent,
    FormdialogComponent,
    FormatCellPipe,
    TableDialogComponent,
    GridPageComponent,
    GridFilterComponent,
    GridHeaderComponent,
    GridSelectorComponent,
    DeleteConfirmDialogComponent,
    ToasterComponent,
    SidebarComponent
  ],
  entryComponents:[
    DeleteConfirmDialogComponent,
    TableDialogComponent,
    ToasterComponent
  ]
})
export class SharedModule { }
