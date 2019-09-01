import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './employees.service';
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
  constructor(private _employeesService: EmployeesService 
    //private _editEmployee:EditEmployeeComponent 
    ) { }

  ngOnInit() {
    //this.employees = this._employeesService.getEmployees();
    console.log("Employees component called")
    this.getEmployees();
  }

  getEmployees() {
    this._employeesService.getEmployees().subscribe(
      (products:any) =>  this.products = products,
      err => console.log(err)
    );
  }

  // editEmployee(empid) {
  //   this._editEmployee.editForm(empid);
  //   // this._employeesService.editEmployee(this.formref).subscribe(
  //   //   (data:any) => this.getEmployees()
  //   //);
  // }
  deleteEmployee(empid) {
    if(confirm("Are you sure you want to delete this?"))
    {
    this._employeesService.deleteEmployee(empid).subscribe(
      (data:any) => this.getEmployees()
    );
    }
  }

}
