import { Component , OnInit, OnDestroy, Input} from "@angular/core";
import {Router} from "@angular/router";
import { LoginGetService } from "../services/login.get.service";
import { LoginService } from "../services/login.service";
@Component({
    selector: 'app-login-password',
    templateUrl: './login-password.html',
    styleUrls: ['./login-password.css']
})
export class LoginPassword implements OnInit, OnDestroy {
   
    user: string= 'Minely';
    password: string;
    valor: any;
    constructor(private _loginService:LoginGetService, public _router:Router) {

    }
    ngOnInit() {
         }

    loginUser( )
    {
        //operador terciario .
            this._loginService.checkLogin(this.user,this.password).subscribe(
            value => {
                    this.valor=value;
                    console.log(this.valor);
                    this.valor.validate ? this._router.navigate(['']) : alert('Error User/Password Invalidos'); 
                     },
            error => console.log('error'));   
     }

    ngOnDestroy() {
    }

}