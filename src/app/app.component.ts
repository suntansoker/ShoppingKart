import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { PieChartComponent } from './employees/product-chart.component';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  isLoading: boolean = true;
  constructor(private _authService: AuthService, private _router: Router) { 
    this._router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      }
      else if (event instanceof NavigationEnd || 
        event instanceof NavigationError ||
        event instanceof NavigationCancel) {
          this.isLoading = false;
        }
    }) 
  }

  isLoggedIn() {
    return this._authService.isLoggedIn();
  }

  changeToLoginRoute() {
    this._authService.logout();
    console.log("Logged Out");
    this._router.navigate(['login']);
  }
}
