import { Component , OnInit, OnDestroy, Input} from "@angular/core";

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit, OnDestroy {
   
    user: string;
    password: string;
    passwordConfirm: string;
    email : string;
    name : string;
    check : boolean;
    response : string ;
    constructor() {

    }
    ngOnInit() {         }
    
    submit( )
    {
        if(this.check == true) {
        this.response="Ok";
        this.checkUser(this.user);}
        else 
        {
            alert('Acceda a terminos y condiciones');    
        }
  
  
    }
    
    checkUser(user : string)
    {
        if (user.length >=5 && user.length <=15)
        this.response = "OK";
        this.checkPassword(this.password, this.passwordConfirm);
    }

    checkPassword(password : string, passwordConfirm : string)
    {
        if (password === passwordConfirm)
        {
            this.response="OK"
            this.checkEmail(this.email);
        }
    }

    checkEmail(email : string)
    {

        this.checkName(this.name);
    }

    checkName(name : string)
    {
        this.response= "Ok";
    }

    ngOnDestroy() {    }
}