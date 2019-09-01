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

  login() {
    localStorage.setItem('routeguard-app-login', "1");
  }

  logout() {
    localStorage.removeItem('routeguard-app-login');
  }

  isLoggedIn() {
    if (localStorage.getItem('routeguard-app-login') != null)
      return true;
    else
      return false;
  }
}
