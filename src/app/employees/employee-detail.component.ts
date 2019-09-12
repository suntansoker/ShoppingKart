import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import {EmployeesService} from './employees.service';
import {Employee} from '../models/employee.model'
import { ChartService } from './chart.service';
//import {PieChartComponent} from '../product-chart.component';

@Component({
    templateUrl: './employee-detail.component.html',
    styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit { 
    id: number;
    employees: Employee[];
    employee: Employee;
    newUrl: string;
    constructor(private route: ActivatedRoute, private location: Location,private _employeesService: EmployeesService,private _chartService: ChartService
        //private pieChart: PieChartComponent
        ){
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.id = +params['id'];
            console.log(`id is ${this.id}`);
            this.newUrl =this._employeesService._prodUrl;
            this.newUrl = `${this.newUrl}?id=${this.id}`;
            this._employeesService.getEmployees(this.newUrl).subscribe(
                (employees:Employee[]) => { 
                    this.employees = employees;
                    this.employee=this.employees[0];
                console.log(`Hey ${this.employee.name}`);
                console.log(`Hey ${this.employee.id}`);
                this._chartService.updateData([this.employee.name,this.employee.id.toString()])
                //this.pieChart.getVisit([this.employee.name,this.employee.id.toString])
            },
            //this.pieChart.getVisit([this.employee.name,this.employee.id])},
                err => console.log(err)
              );
        });
     //this.employee = this._employeesService.getEmployee(this.id)
     
    }

    goBack(): void {
        this.location.back();
    }
}
