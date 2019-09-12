import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {
    public _regUrl = "http://localhost:4000/registers";
    //private _customUrl: string;
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };
    constructor(private _http: HttpClient){}
    getUsers(url=this._regUrl) {
        return this._http.get(url);
    }
    
    // getEmployeesbyIDpasswd(logid:string, passwd:string): any {
    //      this._customUrl=this._prodUrl+"?"
    //  }

    addUser(formValue: any,id:number): any {
        //let empid:number = count + 1;
        let user:User = {
            "id": id,
            "emailid": formValue.emailid,
            "passwd": formValue.passwd,
            "firstname": formValue.firstname,
            "lastname":formValue.lastname,
            "location":formValue.locate,
            "mobile":formValue.mobile,    
        }
        return this._http.post(this._regUrl, user, this.httpOptions);
    }

//     editEmployee(formref:any,id:number) {
//         let editEmployeeURL = `${this._prodUrl}/${id}`;
//         let updatedEmployee = {
//             "name": formref.name,
//             "description": formref.description,
//             "manufacturer":formref.manufacturer,
//             "price":formref.price,
//             "quantity":formref.quantity,
//         }
//         console.log(`===> url = ${editEmployeeURL}, method = put`);
//         return this._http.put(editEmployeeURL, updatedEmployee, this.httpOptions);

//     }
    
//     deleteEmployee(empid) {
//         let deleteEmployeeURL = `${this._prodUrl}/${empid}`;
// //      console.log(`===> url = ${deleteEmployeeURL}, method = delete`);
//         return this._http.delete(deleteEmployeeURL);
//     }
}
