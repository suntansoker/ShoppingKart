import { Component, ViewChild, OnInit } from '@angular/core';
//import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { AuthService } from './auth.service';
import { RegisterService } from './register.service';
import { User } from './models/user.model';
//import { LoginComponent } from './login.component';

@Component({
  selector: 'profile',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})

export class UserDetailComponent implements OnInit{
    userId: string;
    details: User[]
   
    url: string;
  constructor(private _authService: AuthService, private _regService:RegisterService, private router: Router,
    private location: Location
     ) { 
       this.userId= this._authService.getToken();
       this.url =this._regService._regUrl;
       this.url = `${this.url}?emailid=${this.userId}`; 
      this._regService.getUsers(this.url).subscribe(
        (data: User[]) => this.details=data
      );
     }
     
    ngOnInit(){

}

   goBack(): void {
     this.location.back();
 }

}
