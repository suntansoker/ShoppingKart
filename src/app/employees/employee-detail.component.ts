import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import {EmployeesService} from './employees.service';
import {Employee} from '../models/employee.model'
//import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
    templateUrl: './employee-detail.component.html',
    styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit { 
    id: number;
    employees: Employee[];
    //employee: Employee;
    constructor(private route: ActivatedRoute, private location: Location,private _employeesService: EmployeesService){
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.id = +params['id'];
            console.log(`id is ${this.id}`);
        });
     //this.employee = this._employeesService.getEmployee(this.id)
     this._employeesService.getEmployees().subscribe(
        (employees:Employee[]) =>  this.employees = employees,
        err => console.log(err)
      );
    }

    goBack(): void {
        this.location.back();
    }
}
