import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeesService } from './employees.service';
import { AuthService } from '../auth.service';
//import {EditEmployeeComponent} from './employee-edit.component';

@Component({
  selector: 'my-emp',
  templateUrl: './employees.component.html'
})
export class EmployeesComponent implements OnInit {
  title: string = 'Products List';
  nameFilter: string = '';
  products: any[];
  //formref: any;
  constructor(private _employeesService: EmployeesService,
    private _authService: AuthService,
    private _router: Router,
    private _route:ActivatedRoute
    //private _editEmployee:EditEmployeeComponent 
    ) {
      this.products = this._route.snapshot.data['employees'];
     }

  ngOnInit() {
    //this.employees = this._employeesService.getEmployees();
    console.log("Employees component called")
    this.getEmployees();
    //this.products = this._route.snapshot.data['employees'];
  }

  getEmployees() {
    this._employeesService.getEmployees().subscribe(
      (products:any) =>  this.products = products,
      err => console.log(err)
    );
    //this._router.navigate(['products']);
  }

  // editEmployee(empid) {
  //   this._editEmployee.editForm(empid);
  //   // this._employeesService.editEmployee(this.formref).subscribe(
  //   //   (data:any) => this.getEmployees()
  //   //);
  // }
  deleteEmployee(empid) {
    console.log(`Can delete be activated ?`);
        if (this._authService.isLoggedIn()) {
            console.log("Yes, the route can be activated as we are already logged in.");
            if(confirm("Are you sure you want to delete this?"))
              {
              this._employeesService.deleteEmployee(empid).subscribe(
                (data:any) => this.getEmployees()
              );
              }
        }
        else {
            console.log("CANNOT ACTIVATE the route until logged in...");
            this._router.navigate(['login']);
        }
    
  }

}
