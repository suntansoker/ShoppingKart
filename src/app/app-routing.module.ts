import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login.component';
import { PageNotFoundComponent } from './page-not-found.component';
//import { CustomersLoadGuardService } from './customers/customers-load-guard.service';
import { RegisterComponent } from './register.component';
import { UserDetailComponent } from './user-detail.component';

const appRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: UserDetailComponent},
  // { path: 'customers', 
  //   loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule),
  //   canLoad: [ CustomersLoadGuardService ]
  // },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: NoPreloading})
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
