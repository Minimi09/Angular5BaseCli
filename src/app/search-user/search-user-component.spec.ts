import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_PROVIDERS } from '../app.providers';
import { SearchUserComponent } from './search-user-component';
import { FormsModule } from '@angular/forms';
import { by } from 'protractor';


describe('SearchUserComponent', () => {
  let component: SearchUserComponent;
  let fixture: ComponentFixture<SearchUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchUserComponent ],
      providers:[APP_PROVIDERS],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => { 
    fixture = TestBed.createComponent(SearchUserComponent);
    component = fixture.componentInstance; //instancia de componente, adq sys propiedades
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSearchClick',() =>{

   component.userName='Minimi09';
   component.onSearchUser.subscribe( x =>{
      expect(x).toEqual('Minimi09');
   })
   component.onSearchClick();
  });

  it('should call onSearchClick in view',() =>{

    component.userName='Minimi09';
    component.onSearchUser.subscribe( x =>{
    expect(x).toEqual('Minimi09');
    });

    let compiler = fixture.nativeElement;
    compiler.querySelector('button').click();    
    //fixture.debugElement.query(By.css('button')).nativeElement;
     });
});
