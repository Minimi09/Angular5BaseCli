import { Injectable } from '@angular/core';
import {Router} from '@Angular/router';

@Injectable()
export class LoginService {

    userOne:string = 'Minely';
    passwordOne:string='1234';
  
    
    checkLogin(user:string,password:string){
        return (this.userOne===user && this.passwordOne===password)
    }

    
   
}
