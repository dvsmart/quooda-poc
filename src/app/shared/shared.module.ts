import { NgModule } from "../../../node_modules/@angular/core";
import { CommonModule } from "../../../node_modules/@angular/common";
import { ReactiveFormsModule, FormsModule } from "../../../node_modules/@angular/forms";
import { HttpClientModule } from "../../../node_modules/@angular/common/http";
import { MaterialModule } from "./material.module";
import { MinigridService } from "./services/minigrid.service";
import { LoadingService } from "./services/loading.service";
import { ToasterService } from "./services/toaster.service";
import { PiechartComponent } from "./components/charts/piechart/piechart.component";
import { DoughnutComponent } from "./components/charts/doughnut/doughnut.component";
import { BarchartComponent } from "./components/charts/barchart/barchart.component";
import { LinechartComponent } from "./components/charts/linechart/linechart.component";
import { ConfirmmodalComponent } from "./components/confirmmodel/confirmmodel.component";
import { DatatableComponent } from "./components/datatable/datatable.component";
import { FormdialogComponent } from "./components/formdialog/formdialog.component";
import { FlexLayoutModule } from "../../../node_modules/@angular/flex-layout";
import { FormatCellPipe } from "./pipes/format-cell.pipe";
import { TableDialogComponent } from "./components/table-dialog/table-dialog.component";

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
    TableDialogComponent
  ],
  providers: [MinigridService,LoadingService,ToasterService],
  declarations:[
    PiechartComponent,
    LinechartComponent,
    DoughnutComponent,
    BarchartComponent,
    ConfirmmodalComponent,
    DatatableComponent,
    FormdialogComponent,
    FormatCellPipe,
    TableDialogComponent
  ]
})
export class SharedModule { }
