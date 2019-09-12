import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeesService } from './employees.service';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeesResolverService implements Resolve<Employee[]> {
    constructor(private _employeesService: EmployeesService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[]> {
        console.log("CustomersResolverService ...");
        return this._employeesService.getEmployees();
    }

}