import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '../../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {
  formGroup: FormGroup;
  @Output() cancelNotify = new EventEmitter<boolean>();
  @Input() data: any;
  constructor() { }

  ngOnInit() {
    debugger;
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
      StatusStartDate: new FormControl('')
    });
    if(this.data != null && this.data != undefined){
      this.formGroup.patchValue({
        AddressLine1: this.data.addressLine1
      })
    }
  }

  ngOnChanges(){
    debugger;
    
  }

  cancel(){
    this.cancelNotify.emit(true);
  }

  save(){
    alert(this.formGroup.value);
  }

}
