import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { RegisterService } from './register.service';
import { User } from './models/user.model';
import { LoginComponent } from './login.component';

@Component({
  selector: 'profile',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
    //@ViewChild('regForm', {static: false}) addEmployeeForm:NgForm;
    userid: string;
    firstname: string;
    lastname: string;
    locate: string;
    mobile: number;
    details: User[]
    isThere: boolean= false;
  constructor(private _regService: RegisterService, private router: Router,
    private location: Location
     ) { }
    
    
  ngOnInit() {
  }
  
//   displayUser(userdetails: User[]) {
//     this.details=userdetails;
//   }

//   goBack(): void {
//     this.location.back();
// }

}
