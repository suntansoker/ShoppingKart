import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { CustomersLoadGuardService } from './customers-load-guard.service';
import { CustomersResolverService } from './customers-resolver.service';

const custRoutes: Routes = [
        { path: '', 
          component: CustomersComponent, 
          canActivate: [ CustomersLoadGuardService ],
          resolve: { customers: CustomersResolverService }
        },
        { path: ':id', component: CustomerDetailComponent }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(custRoutes)
  ],
  exports: [ RouterModule ]
})

export class CustomersRoutingModule { }
