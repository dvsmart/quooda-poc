import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TableConfig } from '@app/shared/models/TableConfig';
import { AssetService } from '@app/features/asset/service/asset.service';
import { trigger, transition, animate, style } from '@angular/animations'
import { MessageService, Payload } from '@app/shared/services/message.service';
import { Subscription } from 'rxjs';
import { BaseComponent } from '@app/shared/models/BaseComponent';
import { Router } from '@angular/router';

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
  subscription: Subscription;
  data:any;

  constructor(private messageservice: MessageService,private assetservice: AssetService) {
    this.subscription = this.messageservice.getMessage().subscribe((payload: Payload) => {
      if (payload.IsNew()) {
        this.addRecord();
      }
      if (payload.IsCancel()) {
        this.close();
      }
      if (payload.IsEdit()) {
        this.edit(payload.id);
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
  }

  close() {
    this.showEditForm = false;
  }

  edit(id) {
    this.showEditForm = true;
    this.assetservice.getSingle(id).subscribe(x => {this.data = x;});
  }

}
