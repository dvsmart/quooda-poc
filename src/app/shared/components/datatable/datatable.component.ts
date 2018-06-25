import { Component, OnInit, Input } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {
  dataSource: MyDataSource;
  dataSubject = new BehaviorSubject<any[]>([]);

  @Input() path;
  @Input() columns: any[] = [];

  data: any[];
  constructor(private apiservice: ApiService) { }

  ngOnInit() {

 debugger;

    this.apiservice.getData(this.path).subscribe(x=> {this.dataSubject.next(x);console.log(x);});

    this.dataSource =  new MyDataSource(this.dataSubject);
    // this.dataSubject.next(this.data);
  }
}

export class MyDataSource extends DataSource<any[]> {
  constructor(private subject: BehaviorSubject<any[]>) {
    super ();
  }
  connect (): Observable<any[]> {
    return this.subject.asObservable();
  }
  disconnect (): void {}
}
