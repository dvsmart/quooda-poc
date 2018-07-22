import { Component, OnInit, Input } from '@angular/core';
import { SelectionModel } from '../../../../../node_modules/@angular/cdk/collections';
import { trigger, state, style, transition, animate, group } from '@angular/animations';
import { MatDialog } from '@angular/material';
import { DeleteConfirmDialogComponent } from '@app/shared/components/delete-confirm-dialog/delete-confirm-dialog.component';

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

  selectedRow = new SelectionModel<any>(true);
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.selection !== undefined) {
      this.selectedRow = this.selection;
    }
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
      console.log('The dialog was closed');
    });
  }

}
