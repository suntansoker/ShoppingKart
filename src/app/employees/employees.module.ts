import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { EmployeesRoutingModule } from './employees-routing.module';

import { EmployeesService } from './employees.service';
import { AddEmployeeGuardService } from './addemployee-guard.service';
import { EmployeeDetailGuardService } from './employee-detail-guard.service';
import {EmployeeEditGuardService} from './employee-edit-guard.service';

import { EmployeesComponent } from './employees.component';
import { AddEmployeeFormComponent } from './addemployee-form.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EditEmployeeComponent } from './employee-edit.component';
//import { PieChartComponent } from './product-chart.component';
//import { ChartsModule } from 'ng2-charts';


import { EmployeesResolverService } from './employee-resolver.service';
import { ChartService } from './chart.service';
//import { PieChartComponent } from '../product-chart.component';

@NgModule({
  imports: [
    SharedModule,
    EmployeesRoutingModule
    //ChartsModule
  ],
  providers: [EmployeesService, 
    AddEmployeeGuardService,
    EmployeeDetailGuardService,
    EmployeeEditGuardService,
    EmployeesResolverService,
    ChartService
    ],
  declarations: [EmployeesComponent, 
    AddEmployeeFormComponent, 
    EmployeeDetailComponent,
    EditEmployeeComponent
    //PieChartComponent
  ]
})
export class EmployeesModule { }
