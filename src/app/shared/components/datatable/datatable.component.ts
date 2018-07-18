import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { merge } from 'rxjs/observable/merge';
import { of as observableOf } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators/catchError';
import { map } from 'rxjs/operators/map';
import { startWith } from 'rxjs/operators/startWith';
import { switchMap } from 'rxjs/operators/switchMap';
import { environment } from '../../../../environments/environment';
import { SelectionModel } from '@angular/cdk/collections';
import { ColumnMap, ColumnSetting } from '../../models/columnsetting';
import { trigger, state, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
    trigger('slideInOut', [
      state('in', style({
        'max-height': '500px', 'opacity': '1', 'visibility': 'visible'
      })),
      state('out', style({
        'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
      })),
      transition('in => out', [group([
        animate('400ms ease-in-out', style({
          'opacity': '0'
        })),
        animate('600ms ease-in-out', style({
          'max-height': '0px'
        })),
        animate('700ms ease-in-out', style({
          'visibility': 'hidden'
        }))
      ]
      )]),
      transition('out => in', [group([
        animate('1ms ease-in-out', style({
          'visibility': 'visible'
        })),
        animate('600ms ease-in-out', style({
          'max-height': '500px'
        })),
        animate('800ms ease-in-out', style({
          'opacity': '1'
        }))
      ]
      )])
    ])
  ]  
})
export class DatatableComponent implements OnInit {
  @Input() displayedColumns;
  @Input() config;
  animationState = 'out';
  exampleDatabase: ExampleHttpDao | null;
  dataSource = new MatTableDataSource();
  expandedElement: any
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  currentPage = 0;
  pageSize = 10;
  allSelected: boolean;
  columnMaps: ColumnSetting[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  selection = new SelectionModel<any>(true, []);
  constructor(private http: HttpClient) { }

  trigger() {
    this.animationState = this.animationState === 'out' ? 'in' : 'out';
  }

  isAllSelected() {
    // const numSelected = this.selection.selected.length;
    // const numRows = this.resultsLength;
    // return numSelected === numRows;
  }

  masterToggle() {
    //this.isAllSelected() ? this.selection.clear() : this.selectAll();
  }

  selectAll() {
    this.allSelected = true;
    //this.dataSource.forEach(row => this.selection.select(row));
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {
    this.config = this.config;
    this.setTableColumns();
    this.setColumnsFromConfig();
    this.setColumnsFromDataRow();
    this.exampleDatabase = new ExampleHttpDao(this.http, this.config.url);
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    this.loadData();
  }

  setTableColumns() {
    this.displayedColumns = this.config.columns.map(x => x.primaryKey);
    if (this.config.canExpand && this.displayedColumns != null) {
      this.displayedColumns.unshift('expand');
    }
    if (this.config.canSelect && this.displayedColumns != null) {
      this.displayedColumns.unshift('select');
    }
    if (this.config.canDelete && this.displayedColumns != null) {
      this.displayedColumns.push('delete');
    }
  }

  setColumnsFromConfig() {
    if (this.config.columns != null) {
      this.columnMaps = this.config.columns.map(col => new ColumnMap(col));
    }
  }

  setColumnsFromDataRow() {
    if (this.config.columns == null) {
      this.columnMaps = Object.keys(this.dataSource.data[0])
        .map(key => {
          return new ColumnMap({
            primaryKey: key,
            header: key.slice(0, 1).toUpperCase() +
              key.replace(/_/g, ' ').slice(1),
            format: 'default',
          });
        });
    }
  }

  loadData() {
    this.isLoadingResults = true;
    merge(this.sort.sortChange, this.paginator.pageIndex)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.exampleDatabase!.getDataSource(
            this.sort.active, this.sort.direction, this.currentPage, this.pageSize);
        }),
        map(data => {
          this.isLoadingResults = false;
          this.resultsLength = data.totalCount;
          return data.data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => {
        this.dataSource = data
        if (this.allSelected) {
          this.dataSource.data.forEach(row => this.selection.select(row));
        }
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  pageEvent($event) {
    this.currentPage = $event.pageIndex + 1;
    this.pageSize = $event.pageSize;
    this.loadData();
  }
}

export class ExampleHttpDao {
  constructor(private http: HttpClient, private url: string) { }

  getDataSource(sort: string, order: string, page: number, pageSize: number): Observable<any> {
    const api = environment.apiUrl;
    page = page == 0 ? 1 : page;
    //const requestUrl = api + 'Task/Taskforgrid?page=' + page + '&pageSize=' + pageSize;
    const requestUrl = api + this.url + '?page=' + page + '&pageSize=' + pageSize;
    return this.http.get<any>(requestUrl);
  }
}
