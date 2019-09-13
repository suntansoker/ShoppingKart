import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { RegisterService} from './register.service';
import { AuthService} from './auth.service';
import { User } from './models/user.model';
//import { VirtualTimeScheduler } from 'rxjs';
//import { UserDetailComponent } from './user-detail.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm', {static: false}) LoginForm:NgForm;
  user:User[];
  newUrl:string;
  constructor(private _regService: RegisterService,
    private _authService: AuthService ,
    private router: Router, 
    //private userDetail : UserDetailComponent
    //private location: Location
    ) { }

  ngOnInit() {
  }

  onSubmit(loginForm:any){
    this.newUrl =this._regService._regUrl;
    this.newUrl = `${this.newUrl}?emailid=${loginForm.emailid}&&passwd=${loginForm.passwd}`;
    console.log(`${this.newUrl}`);
    this._regService.getUsers(this.newUrl).subscribe(
      (data:User[]) => {
        this.user = data;
        //console.log(`${typeof(this.user)}`);
        if(this.user.length==1)
        {
          this._authService.login(loginForm.emailid);
          //this.userDetail.displayUser(data);
          console.log("Logged In");
          this.router.navigate(["../products"]);
        }
        else{
          console.log("Invalid Credentials!");
          this.LoginForm.reset();
        }
      },
      err => console.log(err)
      
        //emailid:user['emailid'],

      
  );
  //console.log(`${this.user[0].emailid}`);
    
    // this._authService.login();
    // console.log("Logged In");
    // this.router.navigate(["../products"]);
  }

}
