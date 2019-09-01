import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomersService } from './customers.service';

@Component({
  selector: 'my-cust',
  templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {
  title: string = 'Customers List';
  customers: any[];
  
  // constructor(private _customersService: CustomersService) { }

  constructor(private _route: ActivatedRoute) { 
    this.customers = this._route.snapshot.data['customers'];
  }

  ngOnInit() {
/*    this._customersService.getCustomers()
        .then((customers) => this.customers = customers);
*/  
  }


}
