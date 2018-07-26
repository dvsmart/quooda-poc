import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TableConfig } from '@app/shared/models/TableConfig';
import { AssetService } from '@app/features/asset/service/asset.service';
import { trigger, transition, animate, style } from '@angular/animations'
import { MessageService, Payload } from '@app/shared/services/message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('100ms ease-in', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})
export class AssetComponent {
  assetGrid: TableConfig;
  showEditForm: boolean;
  formData: any;
  subscription: Subscription;

  constructor(private assetservice: AssetService, private messageservice: MessageService) {
    this.subscription = this.messageservice.getMessage().subscribe((payload: Payload) => {
      if (payload.IsNew()) {
        this.addRecord();
      }
      if (payload.IsEdit()) {
        this.edit(payload.id);
      }
      if (payload.IsCancel()) {
        this.close();
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.assetGrid = new TableConfig('Properties', 5, false, true);
    this.assetGrid.dataUrl = 'AssetProperties';
    const columns =
      [
        {
          primaryKey: 'dataId',
          header: 'ID'
        },
        {
          primaryKey: 'addressLine1',
          header: 'Address Line 1'
        },
        {
          primaryKey: 'postCode',
          header: 'Post Code'
        },
        {
          primaryKey: 'city',
          header: 'City'
        },
        {
          primaryKey: 'portfolioName',
          header: 'Portfolio'
        },
        {
          primaryKey: 'subPortfolioName',
          header: 'SubPortfolio'
        },
        {
          primaryKey: 'addedDate',
          header: 'Added On',
          format: 'date',
          isVisibleForMobile: false
        },
        {
          primaryKey: 'assetType',
          header: 'Asset Type'
        }
      ];
    this.assetGrid.columns = columns;
  }

  addRecord() {
    this.showEditForm = true;
    this.formData = null;
  }

  close() {
    this.showEditForm = false;
  }

  edit(record) {
    this.assetservice.getSingle(record).subscribe(x => {
      this.formData = x;
      if (x != null) {
        this.showEditForm = true;
      }
    }
    );
  }
}
