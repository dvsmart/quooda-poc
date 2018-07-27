import { Component, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AssetService } from '@app/features/asset/service/asset.service';
import { ToasterService } from '@app/shared/services/toaster.service';
import { MessageService, Payload } from '@app/shared/services/message.service';
import { BaseComponent } from '@app/shared/models/BaseComponent';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent {
  formGroup: FormGroup;
  @Input() data: any;
  title: string;
  constructor(private toaster: ToasterService, private messageservice: MessageService, private assetservice: AssetService) {
  }

  ngOnInit() {
    this.createFormGroup();
  }

  ngOnChanges() {
    this.createFormGroup();
  }

  createFormGroup() {
    this.formGroup = new FormGroup({
      PropertyReference: new FormControl('', Validators.required),
      AddressLine1: new FormControl('', Validators.required),
      AddressLine2: new FormControl('', Validators.required),
      AddressLine3: new FormControl(''),
      City: new FormControl(''),
      Postcode: new FormControl(''),
      KnownAs: new FormControl(''),
      PropertySize: new FormControl(''),
      NetInternalSize: new FormControl(''),
      GrossInternalSize: new FormControl(''),
      NumberOfFloors: new FormControl(''),
      NumberOfPlantRooms: new FormControl(''),
      StatusStartDate: new FormControl(''),
      id: new FormControl(0),
      assetId: new FormControl(0)
    });
    if (this.data != null && this.data != undefined) {
      this.title = 'Edit Property - ' + this.data.dataId;
      this.formGroup.patchValue({
        id: this.data.id,
        dataId: this.data.dataId,
        AddressLine1: this.data.addressLine1,
        PropertyReference: this.data.propertyReference,
        AddressLine2: this.data.addressLine2,
        AddressLine3: this.data.addressLine3,
        City: this.data.city,
        Postcode: this.data.postcode,
        KnownAs: this.data.knownAs,
        PropertySize: this.data.propertySize,
        NetInternalSize: this.data.netInternalSize,
        GrossInternalSize: this.data.grossInternalSize,
        NumberOfFloors: this.data.numberOfFloors,
        NumberOfPlantRooms: this.data.numberOfPlantRooms,
        StatusStartDate: this.data.statusStartDate,
        assetId: this.data.assetId
      })
    } else {
      this.title = 'Create New Property';
    }
  }
  

  cancel() {
    this.messageservice.cancelMessage();
  }

  save() {
    if (this.formGroup.value.id == "") {
      this.assetservice.add(this.formGroup.value).subscribe(x => {
        if (x['saveSuccessful'] === true) {
          this.title = 'Edit Property - ' + x['savedDataId'];
          this.toaster.open("Saved successfully.");
          this.messageservice.refreshMessage();
        }
        else {
          this.toaster.open(x['errorMessage']);
        }
      });
    } else {
      this.assetservice.update(this.formGroup.value.id, this.formGroup.value).subscribe(x => {
        if (x['saveSuccessful'] === true) {
          this.title = 'Edit Property - ' + x['savedDataId'];
          this.toaster.open("Saved successfully.");
          this.messageservice.refreshMessage();
        } else {
          this.toaster.open(x['errorMessage']);
        }
      });
    }
  }

}
