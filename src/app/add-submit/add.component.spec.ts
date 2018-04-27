import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddComponent } from './add.component';
import { MATERIAL_COMPONENTS} from "../app.module";
import { FormsModule } from '@angular/forms';
import { APP_PROVIDERS } from '../app.providers';
import { AppComponent, routes } from '../app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Compiler } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { LoginComponent } from "../login/login.component";
import { LoginPassword} from "../login-password/login-password";
import {SearchUserComponent} from '../search-user/search-user-component';
import { GitHubCardComponent } from "../git-hub-card/git-hub-card.component";
import { PasivoComponent } from '../pasivo/pasivo.component';
import { ReactivoComponent } from '../reactivo/reactivo.component';
import { Add } from "../add/add";


fdescribe('Add', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComponent, LoginPassword,
        MainComponent,
       AboutComponent,
        ContactComponent,
        LoginComponent,
        SearchUserComponent,
        GitHubCardComponent,
       PasivoComponent,
      Add],
      imports:[MATERIAL_COMPONENTS,
      FormsModule,
      RouterModule.forRoot(routes),
      BrowserAnimationsModule,
      ],
      providers: [APP_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance; //instancia de componente, adq sys propiedades
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate check',() =>{
    component.check=true;
    component.submit();
    let compiled = fixture.nativeElement;
    expect(compiled.querySelector('div').textContent).toContain(`OK`);  });

  it('should validate user',() =>{
    component.user='Minimi';
    component.checkUser(component.user);
    let compiled = fixture.nativeElement;
    expect(compiled.querySelector('div').textContent).toContain(`OK`);
  });

  it('should validate password',() =>{
     component.password='Unodos34';
     component.passwordConfirm='Unodos34';
     component.checkPassword(component.password, component.passwordConfirm);
     let compiled = fixture.nativeElement;
     expect(compiled.querySelector('div').textContent).toContain(`OK`);  });

  it('should validate email',() =>{
    component.email
    component.checkEmail(component.email);
    let compiled = fixture.nativeElement;
    expect(compiled.querySelector('div').textContent).toContain(`OK`);  });
 
  it('should validate name',() =>{
        component.name= 'Minely Pereyra Rodriguez';
        component.checkName(component.name);
        let compiled = fixture.nativeElement;
        expect(compiled.querySelector('div').textContent).toContain(`OK`);  });
});
