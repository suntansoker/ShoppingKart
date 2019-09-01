import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CustomersRoutingModule } from './customers-routing.module'
import { CustomersComponent } from './customers.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { CustomersService } from './customers.service';

import { CustomersResolverService } from './customers-resolver.service';

@NgModule({
  imports: [
    SharedModule,
    CustomersRoutingModule
  ],
  providers: [CustomersService, CustomersResolverService],
  declarations: [CustomersComponent, CustomerDetailComponent]
})
export class CustomersModule { }
