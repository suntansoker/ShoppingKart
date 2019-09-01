import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';

@Injectable()
export class CustomersService {
    getCustomers(): Promise<Customer[]> {
        let arrCustomers: Customer[] = [
            {
                "id": 1,
                "name": "Citibank",
            },
            {
                "id": 2,
                "name": "Shell",
            },
            {
                "id": 3,
                "name": "Cerner",
            }
        ];
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(arrCustomers);
            }, 2000);
        });
    }
}
