import { Injectable } from '@angular/core'
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable()
export class EmployeeDetailGuardService implements CanActivate {
    constructor(private _authService: AuthService, private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log(`Can ${state.url} be activated ?`);
        if (this._authService.isLoggedIn()) {
            console.log("Yes, the route can be activated as we are already logged in.");
            return true;
        }
        else {
            console.log("CANNOT ACTIVATE the route until logged in...");
            this._router.navigate(['login']);
            return false;
        }
    }
}