import { Component, OnInit } from '@angular/core';
import { AddModel } from '../model/add-model';
import { AddService } from '../services/add.service';

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
  response : string;
  addData : AddModel;

   patronName =/^[A-Za-z\s]*$/;
   patronEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
   patronPsdw = /^[a-zA-Z0-9]+$/;

  constructor(private _addService:AddService) { 
  }

  ngOnInit() {
  }

  submitNow()
  {
    ( 
      this.checkUser(this.user) &&
      this.checkEmail(this.email)&& 
      this.checkPassword(this.password, this.passwordConfirm)&&
      this.checkName(this.name)&&
      this.check
    ) ? this.postFunction() : this.response="NOK";
  
  }

  postFunction()
  {
    this.addData = new AddModel();
    this.addData.user=this.user;
    this.addData.email=this.email;
    this.addData.password=this.password;
    this.addData.name=this.name;

    this._addService.putUserInfo(this.addData).subscribe(
      value => {console.log(value);  this.response="OK";},
      error => {console.log("Error");}
    );
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
