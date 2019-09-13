import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {EmployeesComponent} from './employees.component';
import { EmployeesService } from "./employees.service";
import { Employee } from '../models/employee.model';
import { ChartService } from './chart.service';

@Component({
  selector: 'employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls:['./employee-edit.component.css']
})
export class EditEmployeeComponent {
  @ViewChild('formval', {static: false}) editEmployeeForm:NgForm;
  newUrl:string;
  products: any;
  //product: any;
  index: number;
  id: number;
  // name: string="nil";
  // description: string="nil";
  // manufacturer: string="nil";
  // price: number=0;
  // quantity: number=0;
  constructor(private route: ActivatedRoute,private _employeeService: EmployeesService, private router: Router,
    private _chartService:ChartService
    //private _empcomp:EmployeesComponent
    ) { }
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
        this.id = +params['id'];
        
        console.log(`id is ${this.id}`);
        this.newUrl =this._employeeService._prodUrl;
        this.newUrl = `${this.newUrl}?id=${this.id}`;
        console.log(`${this.newUrl}`);
        this._employeeService.getEmployees(this.newUrl).subscribe(
        (products:any) =>  {
        this.products = products;
        //console.log(`${typeof(this.product)}`);
      },
      //err => console.log(err)
      );
    });
    
    // this.name= this.products[ this.id].name;
    // this.description= this.products[ this.id].description;
    // this.manufacturer= this.products[ this.id].manufacturer;
    // this.price= this.products[ this.id].price;
    // this.quantity= this.products[ this.id].quantity;
  }

  // getEmployees(url) {
  //   this._employeeService.getEmployees(url).subscribe(
  //     (products:Employee[]) =>  {
  //       this.products = products;
  //       //this.index=0;
  //     },
  //     err => console.log(err)
  //   );
  // }

  onSubmit(formValue: any){
    
    //console.log(`${this.newUrl}`);
      this._employeeService.editEmployee(formValue,this.id).subscribe(
        (data:any) => {
          this._employeeService.getEmployees()
          this._chartService.updateData([formValue.name,this.id.toString(),"edit"])
        });
  
    //this._employeeService.addEmployee(formValue); 
    this.router.navigate(['products']);
  }
}

