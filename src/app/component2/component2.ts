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
        var a=this._loginService.checkLogin(this.user,this.password);
        if (a==true)
        {
            this._router.navigate(['']);
        }
    }

    ngOnDestroy() {
    }

}