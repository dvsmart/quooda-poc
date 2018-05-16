import { Component, OnInit } from '@angular/core';
import { GridModel } from '../../viewmodel/grid';
import { CustomerService } from '../../services/customerService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  customerGrid: GridModel;
  constructor(private customerService:CustomerService) {
  }

  ngOnInit() {
    this.customerGrid= this.customerService.getCustomerGridModel();
  }

}
