import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Customer } from '../models/customer.model';
import { CustomersService } from './customers.service';

@Injectable()
export class CustomersResolverService implements Resolve<Customer[]> {
    constructor(private _customersService: CustomersService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Customer[]> {
        console.log("CustomersResolverService ...");
        return this._customersService.getCustomers();
    }

}