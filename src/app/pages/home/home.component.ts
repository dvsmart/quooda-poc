import { Component, OnInit } from '@angular/core';
import { GridModel } from '../../viewmodel/grid';
import { CustomerService } from '../../services/customerService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  customerGrid: GridModel;
  constructor(private customerService:CustomerService) {
  }
  ngOnInit() {
    this.customerGrid= this.customerService.getCustomerGridModel();
  }

}
