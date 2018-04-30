import { TestBed, async } from '@angular/core/testing';
import { AppComponent, routes } from './app.component';
import { MATERIAL_COMPONENTS} from "./app.module";
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from "./login/login.component";
import {SearchUserComponent} from './search-user/search-user-component';
import { GitHubCardComponent } from "./git-hub-card/git-hub-card.component";
import { PasivoComponent } from './pasivo/pasivo.component';
import { ReactivoComponent } from './reactivo/reactivo.component';
import { LoginPassword } from "./login-password/login-password";
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddComponent } from "./add/add.component";
import { AddCardComponent} from "./add-card/add-card.component";



describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, 
        MainComponent,
        AboutComponent,
        ContactComponent,
        LoginComponent,
        SearchUserComponent,
        GitHubCardComponent,
        PasivoComponent,
        ReactivoComponent,
        LoginPassword,
        AddCardComponent,
        AddComponent
      ],
      imports: [
        MATERIAL_COMPONENTS,
        RouterModule.forRoot(routes),
        FormsModule,
        BrowserAnimationsModule],
      providers:[
        {provide:APP_BASE_HREF, useValue: '/'}]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance; //Accede a el objeto
    expect(app.title).toEqual('app');
  }));
    
  it('should render title in a mat-toolbar tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); //Generar la vista de HTML
    const compiled = fixture.debugElement.nativeElement; //Accede a la vista es como mi .dumcnet
    expect(compiled.querySelector('mat-toolbar').textContent).toContain('Menu');
  }));
 /* it('Prueba',() => {
    let texto= 'Minimi';
    expect(texto).toEqual('Minimi');    
  })*/
});
