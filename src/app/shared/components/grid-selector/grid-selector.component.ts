import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { trigger, state, style, transition, animate, group } from '@angular/animations';
import { MatDialog } from '@angular/material';
import { DeleteConfirmDialogComponent } from '@app/shared/components/delete-confirm-dialog/delete-confirm-dialog.component';
import { ToasterService } from '@app/shared/services/toaster.service';

@Component({
  selector: 'app-grid-selector',
  templateUrl: './grid-selector.component.html',
  styleUrls: ['./grid-selector.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition('in => out', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('1000ms ease-in-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition('out => in', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('1000ms ease-in-out', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class GridSelectorComponent implements OnInit {
  @Input() selection;
  @Input() url:string;

  @Output() deleteNotify = new EventEmitter();

  selectedRow = new SelectionModel<any>(true);
  constructor(public dialog: MatDialog,private toaster: ToasterService) { }

  ngOnInit() {
    if (this.selection !== undefined) {
      this.selectedRow = this.selection;
    }
  }

  ngOnChanges() {
  }

  confirmDelete() {
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      data: {
        message: 'Are you sure you want to delete all selected records?',
        actionUrl: this.url,
        ids: this.selection.selected.map(x=>x.id),
        key:'ids'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined && result){
        this.selection.clear();
        this.toaster.showToasterComponent("Record has been deleted successfully","",1500,'success');
        this.deleteNotify.emit(true);
      }else{
        this.toaster.showToasterComponent("Operation aborted","",1000,'success');
      }
    });
  }

}
