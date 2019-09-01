import { Injectable } from '@angular/core'
import { CanLoad, CanActivate, Router, Route, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({providedIn: 'root'})
export class CustomersLoadGuardService implements CanLoad, CanActivate {
    constructor(private _authService: AuthService, private _router: Router) { }

    canLoad(route: Route): boolean {
        console.log(`Can ${route.path} be loaded ?`);
        if (this._authService.isLoggedIn()) {
            console.log("Yes, Customers Module can be loaded as we are already logged in.");
            return true;
        }
        else {
            console.log("CANNOT LOAD Customers Module until logged in...");
            return false;
        }
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log(`Can ${state.url} be activated ?`);
        if (this._authService.isLoggedIn()) {
            console.log("Yes, Customers Module can be activated as we are already logged in.");
            return true;
        }
        else {
            console.log("CANNOT ACTIVATE Customers Module until logged in...");
            return false;
        }
    }
    
}