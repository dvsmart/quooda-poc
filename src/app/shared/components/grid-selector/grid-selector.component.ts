import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { trigger, state, style, transition, animate, group } from '@angular/animations';
import { MatDialog } from '@angular/material';
import { DeleteConfirmDialogComponent } from '@app/shared/components/delete-confirm-dialog/delete-confirm-dialog.component';
import { ToasterService } from '@app/shared/services/toaster.service';
import { MessageService, Payload } from '@app/shared/services/message.service';
import { Subscription } from 'rxjs';

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
  @Input() url: string;
  subscription: Subscription;

  selectedRow = new SelectionModel<any>(true);
  constructor(public dialog: MatDialog, private toaster: ToasterService, private messageservice: MessageService) {
    this.subscription = this.messageservice.getMessage().subscribe((payload: Payload) => {
      if (payload.action === 'delete' && payload.extra != undefined) {
        this.selectedRow = payload.extra;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

  confirmDelete() {
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      data: {
        message: 'Are you sure you want to delete all selected records?',
        actionUrl: this.url + '/deleteAll',
        ids: this.selectedRow.selected.map(x => x.id),
        key: 'ids'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined && result) {
        this.selectedRow.clear();
        this.toaster.showToasterComponent("Record has been deleted successfully", "", 1500, 'success');
        this.messageservice.refreshMessage();
      } else {
        this.toaster.showToasterComponent("Operation aborted", "", 1000, 'success');
      }
    });
  }

}
