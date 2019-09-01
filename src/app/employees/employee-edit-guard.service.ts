import { Injectable } from '@angular/core'
import { CanDeactivate, ActivatedRouteSnapshot } from '@angular/router'
import { EditEmployeeComponent } from './employee-edit.component';

@Injectable()
export class EmployeeEditGuardService implements CanDeactivate<EditEmployeeComponent> {
    canDeactivate(component: EditEmployeeComponent): boolean {
        if (component.editEmployeeForm.dirty && !component.editEmployeeForm.submitted) {
            return confirm('Are you sure you want to leave ?');
        }
        return true;
    }
}