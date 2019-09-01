import { Injectable } from '@angular/core'
import { CanDeactivate, ActivatedRouteSnapshot } from '@angular/router'
import { AddEmployeeFormComponent } from './addemployee-form.component';

@Injectable()
export class AddEmployeeGuardService implements CanDeactivate<AddEmployeeFormComponent> {
    canDeactivate(component: AddEmployeeFormComponent): boolean {
        if (component.addEmployeeForm.dirty && !component.addEmployeeForm.submitted) {
            return confirm('Are you sure you want to leave ?');
        }
        return true;
    }
}