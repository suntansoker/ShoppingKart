import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { EmployeesService } from "./employees.service";

@Component({
  selector: 'addemployee-form',
  templateUrl: './addemployee-form.component.html'
})
export class AddEmployeeFormComponent {
  @ViewChild('formRef', {static: false}) addEmployeeForm:NgForm;
  products: any[];
  id: number;
  constructor(private _employeeService: EmployeesService, private router: Router) { }
  ngOnInit() {
    //this.getEmployees();
  }

  // getEmployees() {
  //   this._employeeService.getEmployees().subscribe(
  //     (products:any) =>  this.products = products,
  //     err => console.log(err)
  //   );
  // }

  onSubmit(formValue: any){
    //this.getEmployees();
      this._employeeService.addEmployee(formValue,this.id).subscribe(
        (data:any) => {}
        //this.getEmployees()
      );
  
    //this._employeeService.addEmployee(formValue); 
    this.router.navigate(['products']);
  }
}

