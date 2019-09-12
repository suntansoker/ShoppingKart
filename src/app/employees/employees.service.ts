import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeesService {
    public _prodUrl = "http://localhost:3000/products";
    //private _customUrl: string;
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };
    constructor(private _http: HttpClient){}
    getEmployees(url=this._prodUrl) {
        return this._http.get<Employee[]>(url);
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(this._http.get(url).json());
        //     }, 2000);
        // });
    }
    
    // getEmployeesbyIDpasswd(logid:string, passwd:string): any {
    //      this._customUrl=this._prodUrl+"?"
    //  }

    addEmployee(formValue: any,count:number): any {
        let empid:number = count + 1;
        let employee:any = {
            "id": empid,
            "name": formValue.name,
            "description": formValue.description,
            "manufacturer":formValue.manufacturer,
            "price":formValue.price,
            "quantity":formValue.quantity,    
        }
        return this._http.post(this._prodUrl, employee, this.httpOptions);
    }

    editEmployee(formref:any,id:number) {
        let editEmployeeURL = `${this._prodUrl}/${id}`;
        let updatedEmployee = {
            "name": formref.name,
            "description": formref.description,
            "manufacturer":formref.manufacturer,
            "price":formref.price,
            "quantity":formref.quantity,
        }
        console.log(`===> url = ${editEmployeeURL}, method = put`);
        return this._http.put(editEmployeeURL, updatedEmployee, this.httpOptions);

    }
    
    deleteEmployee(empid) {
        let deleteEmployeeURL = `${this._prodUrl}/${empid}`;
//      console.log(`===> url = ${deleteEmployeeURL}, method = delete`);
        return this._http.delete(deleteEmployeeURL);
    }
}
