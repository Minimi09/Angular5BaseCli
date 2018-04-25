import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_PROVIDERS } from '../app.providers';
import { GitHubCardComponent } from './git-hub-card.component';
import { GitHubModel} from "../model/git-hub-model";


describe('GitHubCardComponent', () => {
  let component: GitHubCardComponent;
  let fixture: ComponentFixture<GitHubCardComponent>;
  let gitHubData : GitHubModel;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubCardComponent ],
      providers:[APP_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    gitHubData= new GitHubModel();
    gitHubData.login= 'Minimi09';
    gitHubData.name ='Minely';
    gitHubData.followers=1;
    gitHubData.following=1;
    gitHubData.avatarURL='https://avatars3.githubusercontent.com/u/38266223?v=4';

    fixture = TestBed.createComponent(GitHubCardComponent);
    component = fixture.componentInstance; //instancia de componente, adq sys propiedades
   // fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should validate model',() =>{
      component.gitHubData= gitHubData;
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });
    
    it('should validate model in the view',() =>{

      component.gitHubData= gitHubData;
      const compiled= fixture.nativeElement; //tengo acceso a la vista
      fixture.detectChanges();
      expect(compiled.querySelector('#name').textContent).toContain(`Nombre ${gitHubData.name}`);
    });

});
