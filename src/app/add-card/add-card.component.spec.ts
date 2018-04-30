import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCardComponent } from './add-card.component';
import { MATERIAL_COMPONENTS} from "../app.module";
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

fdescribe('AddCardComponent', () => {
  let component: AddCardComponent;
  let fixture: ComponentFixture<AddCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCardComponent ],
      imports :[MATERIAL_COMPONENTS,FormsModule,BrowserAnimationsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate check',() =>{
    let result = component.check= true;
    expect(result).toBeTruthy();
  });

  it('should validate user',() =>{
    component.user='Minimi09';
    let result = component.checkUser(component.user);
    expect(result).toBeTruthy();
  });

  it('should validate password',() =>{
     component.password='Unodos34';
     component.passwordConfirm='Unodos34';
     let result = component.checkPassword(component.password, component.passwordConfirm);
     expect(result).toBeTruthy();
   });

  it('should validate email',() =>{
    component.email = "minimi_8@gmail.com"
    let result = component.checkEmail(component.email);
    expect(result).toBeTruthy();
     });
 
  it('should validate name',() =>{
        component.name= 'Minely Pereyra Rodriguez';
        let result = component.checkName(component.name);
        expect(result).toBeTruthy();
      });

      it('should validate Function',() =>{
        component.check=true;
        component.user='Minimi09';
        component.password='1234';
        component.passwordConfirm='1234';
        component.email = "minimi_8@gmail.com"
        component.name= 'Minely Pereyra';

        let result = component.submitNow();
        fixture.detectChanges(); //Generar la vista de HTML
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('#response').textContent).toContain('OK');
  });
    
});
