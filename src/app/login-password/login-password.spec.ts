import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPassword } from './login-password';
import { MATERIAL_COMPONENTS} from "../app.module";
import { FormsModule } from '@angular/forms';
import { APP_PROVIDERS } from '../app.providers';
import { AppComponent, routes } from '../app.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { LoginComponent } from "../login/login.component";
import {SearchUserComponent} from '../search-user/search-user-component';
import { GitHubCardComponent } from "../git-hub-card/git-hub-card.component";
import { PasivoComponent } from '../pasivo/pasivo.component';
import { ReactivoComponent } from '../reactivo/reactivo.component';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Compiler } from '@angular/core';


fdescribe('LoginPassword', () => {
  let component: LoginPassword;
  let fixture: ComponentFixture<LoginPassword>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPassword,
       MainComponent,
      AboutComponent,
       ContactComponent,
       LoginComponent,
       SearchUserComponent,
       GitHubCardComponent,
      PasivoComponent,
    ReactivoComponent],
      imports:[MATERIAL_COMPONENTS,
      FormsModule,
      RouterModule.forRoot(routes),
      BrowserAnimationsModule,
      ],
      providers: [APP_PROVIDERS,{provide:APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPassword);
    component = fixture.componentInstance; //instancia de componente, adq sys propiedades
   // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate user',() =>{
    
    let navigateSpy = spyOn((component)._router, 'navigate');

    component.user='Minely';
    component.password='1234';
    component.loginUser();
    
    expect(navigateSpy).toHaveBeenCalledWith(['']);
  });

  it('should validate click',() =>{
    
    let navigateSpy = spyOn((component)._router, 'navigate');

    component.user='Minely';
    component.password='1234';
    let compiler = fixture.nativeElement;
    compiler.querySelector('button').click();

    expect(navigateSpy).toHaveBeenCalledWith(['']);
  });

  it('should validate alert',() =>{
    
    component.user='Minely';
    component.password='1234asdasd';

    let navigateSpy = spyOn(window,'alert');
  
    let compiler = fixture.nativeElement;
    compiler.querySelector('button').click();
    /*var alertDialog = browser.switchTo().alert();
    expect(alertDialog.accept).toBeDefined();
    alertDialog.accept();
    */
    expect(navigateSpy).toHaveBeenCalled();
  });
});
