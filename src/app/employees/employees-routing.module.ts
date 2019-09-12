import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEmployeeGuardService } from './addemployee-guard.service';
import { EmployeeDetailGuardService } from './employee-detail-guard.service';
import { EmployeeEditGuardService } from './employee-edit-guard.service';
import { EmployeesResolverService} from './employee-resolver.service';

import { EmployeesComponent } from './employees.component';
import { AddEmployeeFormComponent } from './addemployee-form.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EditEmployeeComponent } from './employee-edit.component';

const empRoutes: Routes = [
  { 
    path: 'products', 
    children: [
      { path: '', component: EmployeesComponent,
      resolve: { employees: EmployeesResolverService}
    },
      { path: 'add', component: AddEmployeeFormComponent,
        canActivate: [EmployeeDetailGuardService],
        canDeactivate: [AddEmployeeGuardService]
      },
      { path: ':id', component: EmployeeDetailComponent,
        canActivate: [EmployeeDetailGuardService]
      },
        { path: ':id/edit', component: EditEmployeeComponent,
        canActivate: [EmployeeDetailGuardService],
        canDeactivate: [EmployeeEditGuardService]
        } 
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(empRoutes)
  ],
  exports: [ RouterModule ]
})

export class EmployeesRoutingModule { }
