import { Component , OnInit, OnDestroy, Input} from "@angular/core";
import { LoginService } from "../services/login.service";
import {Router} from "@angular/router";


@Component({
    selector: 'app-login-password',
    templateUrl: './component2.html',
    styleUrls: ['./component2.css']
})
export class LoginPassword implements OnInit, OnDestroy {
   
    user: string;
    password: string;

    constructor(private _loginService:LoginService, private _router:Router) {

    }
    ngOnInit() {
         }

    loginUser( )
    {
        this._loginService.checkLogin(this.user,this.password) ? this._router.navigate(['']) : alert('Error User/Password Invalidos');
    }

    ngOnDestroy() {
    }

}