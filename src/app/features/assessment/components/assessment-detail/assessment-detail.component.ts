import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AssessmentService } from '@app/features/assessment/service/assessment.service';
import { ToasterService } from '@app/shared/services/toaster.service';
import { MessageService } from '@app/shared/services/message.service';
import { ReferenceModel } from '@app/features/assessment/model/ReferenceModel';

@Component({
  selector: 'app-assessment-detail',
  templateUrl: './assessment-detail.component.html',
  styleUrls: ['./assessment-detail.component.scss']
})
export class AssessmentDetailComponent implements OnInit {
  formGroup: FormGroup;
  @Input() data: any;
  title: string;
  scopes: ReferenceModel[];
  types: ReferenceModel[];
  frequencies: ReferenceModel[];

  constructor(private assessmentservice: AssessmentService, private toaster: ToasterService,private messageservice: MessageService) { }

  ngOnInit() {
    this.createFormGroup();
    this.getScopes();
    this.getTypes();
    this.getFrequencies();
  }

  getScopes(){
    this.assessmentservice.getscopes().subscribe(x=> this.scopes = x);
  }

  getTypes(){
    this.assessmentservice.getTypes().subscribe(x=> this.types = x);
  }

  getFrequencies(){
    this.assessmentservice.getFrequencies().subscribe(x=> this.frequencies = x);
  }

  createFormGroup() {
    this.formGroup = new FormGroup({
      title: new FormControl('', Validators.required),
      reference: new FormControl('', Validators.required),
      assessmentTypeId: new FormControl('', Validators.required),
      scope: new FormControl(''),
      scopeId: new FormControl(''),
      status:new FormControl(''),
      assessmentDate:new FormControl(''),
      id: new FormControl(0),
      publishedBy:new FormControl(''),
      frequencyId: new FormControl(''),
      dataId: new FormControl(0)
    });
    if (this.data != null && this.data != undefined) {
      this.title = 'Edit Assessment - ' + this.data.dataId;
      this.formGroup.patchValue({
        id: this.data.id,
        dataId: this.data.dataId,
        title: this.data.title,
        reference: this.data.reference,
        assessmentTypeId: this.data.assessmentTypeId,
        scope: this.data.scope,
        assessmentDate: this.data.assessmentDate,
        publishedBy: this.data.publishedBy,
        scopeId:this.data.scopeId,
        frequencyId: this.data.frequencyId
      })
    } else {
      this.title = 'Create New Assessment';
    }
  }

  compareFn: ((f1: any, f2: any) => boolean) | null = this.compareByValue;

compareByValue(f1: any, f2: any) { 
  return f1 && f2 && f1.value === f2.value; 
}

  ngOnChanges() {
    this.createFormGroup();
  }

  cancel() {
    this.messageservice.cancelMessage();
  }

  save() {
    debugger;
    if (this.formGroup.value.id == "") {
      this.assessmentservice.add(this.formGroup.value).subscribe(x => {
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
      this.assessmentservice.update(this.formGroup.value.id, this.formGroup.value).subscribe(x => {
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
