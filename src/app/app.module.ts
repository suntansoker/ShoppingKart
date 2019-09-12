import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { EmployeesModule } from './employees/employees.module';
// import { CustomersModule } from './customers/customers.module';

import { AppComponent }  from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { LoginComponent } from './login.component';

import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register.component';
import { UserDetailComponent } from './user-detail.component';
import { PieChartComponent } from './employees/product-chart.component';
import { ChartsModule } from 'ng2-charts';
import { ChartService } from './employees/chart.service';

@NgModule({
  imports: [ BrowserModule, FormsModule, 
    EmployeesModule, 
//  CustomersModule, 
    AppRoutingModule ,
    HttpClientModule,
    ChartsModule
  ],
  declarations: [ AppComponent, AboutComponent, PageNotFoundComponent, LoginComponent,RegisterComponent,
  UserDetailComponent,
  PieChartComponent
  ],
  providers: [ChartService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
