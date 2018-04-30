import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {
  
  user: string;
  password: string;
  passwordConfirm: string;
  email : string;
  name : string;
  check : boolean;
  response : string ;

   patronName =/^[A-Za-z\s]*$/;
   patronEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
   patronPsdw = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$$/;

  constructor() { }

  ngOnInit() {
  }

  submitNow()
  {
    return (
    this.checkUser(this.user) && 
    this.checkEmail(this.email) &&
    this.checkPassword(this.password, this.passwordConfirm) &&
    this.checkName(this.name) &&
    this.check) ? this.response="OK" : this.response= "NOK";

  }

  checkUser(user : string)  
  {
      return user.length >=5 && user.length <=15  
  }

  checkPassword(password : string, passwordConfirm : string)
  {
       return password === passwordConfirm &&
              this.patronPsdw.test(password);
  }

  checkEmail(email : string)
  {

     return this.patronEmail.test(email);
  }

  checkName(name : string)
  {
    return this.patronName.test(name);    
  }

  ngOnDestroy() {
  }

}
