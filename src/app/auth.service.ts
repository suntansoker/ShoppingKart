import { Injectable } from '@angular/core';
import { EmployeesService } from './employees/employees.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _employeeService: EmployeesService) { }


  // getDetails(formval: any)
  // {
  //   this._employeeService.getEmployeesbyIDpasswd(formval.loginid,formval.passwd)
  // }

  login(emailid) {
    localStorage.setItem(emailid, "1");
    let key = localStorage.key(0);
    console.log(`The key is ${key}`);
  }

  logout() {
    localStorage.removeItem(localStorage.key(0));
  }

  getToken(){
    return localStorage.key(0);
  }
  isLoggedIn() {
    if (localStorage.getItem(localStorage.key(0)) != null)
      return true;
    else
      return false;
  }
}
