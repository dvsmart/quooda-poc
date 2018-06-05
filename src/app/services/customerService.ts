import { Injectable } from "@angular/core";
import { GridModel, ColumnModel, ColumnType, PagingModel, SortDirection, ActionModel } from "../viewmodel/grid";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';

const data = [
  { id: 1, name: "sudha", role: "cse" },
  { id: 2, name: "vijay1", role: "ece1" },
  { id: 3, name: "vijay3", role: "aece" },
  { id: 4, name: "vijay4", role: "bece" },
  { id: 5, name: "vijay5", role: "cece" },
  { id: 6, name: "vijay6", role: "dece" },
  { id: 7, name: "vijay7", role: "eece" },
  { id: 8, name: "vijay8", role: "fece" },
  { id: 9, name: "vijay9", role: "gece" },
  { id: 10, name: "vijay10", role: "hece" },
  { id: 11, name: "vijay11", role: "iece" }
];

@Injectable()
export class CustomerService {
  customerDetails: any[];
  /**
   *
   */
  constructor() {
    this.customerDetails = data;
  }

  getCustomerGridModel = () => {
    var customerGrid = new GridModel();
    let columns = [
      new ColumnModel("id", "Id", ColumnType.Label, "col-lg-2"),
      new ColumnModel("name", "Name", ColumnType.Label, "col-lg-5"),
      new ColumnModel("role", "Role", ColumnType.Label, "col-lg-3")];
    let actionModels = [new ActionModel("Edit", "edit", ""),
    new ActionModel("Delete", "delete", "", true, "Are you sure you want to delete?")];
    let pageModel = new PagingModel();
    pageModel.pageIndex = 0;
    pageModel.pageSize = 5;
    pageModel.pagingUrl = "";
    pageModel.sortColumn = "id";

    pageModel.sortDirection = SortDirection.Ascending;
    let data = this.getCustomerDetails(pageModel);
    customerGrid.columns = columns;
    customerGrid.data = data;
    customerGrid.uniqueId = "id";
    customerGrid.title = "Customer Grid";
    customerGrid.actions = actionModels;
    customerGrid.showExpandableRow = true;
    customerGrid.ExpandableComponent = '';
    customerGrid.displayAddButton = true;
    pageModel.totalRecord = this.customerDetails.length;
    customerGrid.pageModel = pageModel;
    return customerGrid;
  }
  getCustomerDetails = (pageModel: PagingModel) => {
    let filteredItems = this.customerDetails;
    if (pageModel != undefined && pageModel != null) {
      if (pageModel.searchBy != undefined && pageModel.searchBy != "" && pageModel.searchBy != null) {
        filteredItems = filteredItems.filter((item: any) => {
          return item.name.toLowerCase().startsWith(pageModel.searchBy.toLowerCase());
        });
      }

      if (pageModel.sortColumn != undefined && pageModel.sortColumn != "" && pageModel.sortColumn != null) {
        filteredItems = this.sortObjectsArray(filteredItems, pageModel.sortColumn);
        if (pageModel.sortDirection == SortDirection.Desccending) {
          filteredItems = filteredItems.reverse();
        }

      }
      let index = pageModel.pageIndex * pageModel.pageSize;
      filteredItems = filteredItems.slice(index, index + pageModel.pageSize);
    }
    return filteredItems;



  }

  deleteCustomer(customerId: number): Observable<boolean> {
    this.customerDetails = this.customerDetails.filter((x: any) => {
      return x.id != customerId;
    })
    return Observable.of(true);
  }
  sortObjectsArray = (objectsArray, sortKey) => {
    // Quick Sort:
    var retVal;

    if (1 < objectsArray.length) {
      var pivotIndex = Math.floor((objectsArray.length - 1) / 2);  // middle index
      var pivotItem = objectsArray[pivotIndex];                    // value in the middle index
      var less = [], more = [];

      objectsArray.splice(pivotIndex, 1);                          // remove the item in the pivot position
      objectsArray.forEach(function (value, index, array) {
        value[sortKey] <= pivotItem[sortKey] ?                   // compare the 'sortKey' proiperty
          less.push(value) :
          more.push(value);
      });

      retVal = this.sortObjectsArray(less, sortKey).concat([pivotItem], this.sortObjectsArray(more, sortKey));
    }
    else {
      retVal = objectsArray;
    }

    return retVal;
  }
}

