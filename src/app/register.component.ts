import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Location, registerLocaleData } from "@angular/common";
import { RegisterService } from './register.service';
import { User } from './models/user.model';

@Component({
  selector: 'user-register',
  templateUrl: './register.component.html',
  styleUrls:['./register.component.css']
})
export class RegisterComponent implements OnInit {
    //@ViewChild('regForm', {static: false}) addEmployeeForm:NgForm;
    user:User[];
    newUrl:string;
    id: number;
  constructor(private _regService: RegisterService, private router: Router,
    //private location: Location
     ) { }
    
  ngOnInit() {
  }

  getUsers() {
    this._regService.getUsers().subscribe(
      (users:User[]) =>  this.user = users,
      err => console.log(err)
    );
  }

  onSubmit(formval:any){
    this.newUrl =this._regService._regUrl;
    this.newUrl = `${this.newUrl}?emailid=${formval.emailid}`;
    this._regService.getUsers(this.newUrl).subscribe(
        (data:User[])=>{
            this.user=data;
            if(this.user.length==0){
                this._regService.addUser(formval,this.id).subscribe(
                    (data:any) => this.getUsers()
                );
                console.log("New User Registered");
                //this.userDetail.displayUser(formval);
                this.router.navigate(['login']);
            }
            else{
                console.log("User already exists!");
            }
        },
        err => console.log(err)
    );
  }

}
