import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { MATERIAL_COMPONENTS} from "../app.module";
import {SearchUserComponent} from '../search-user/search-user-component';
import { GitHubCardComponent } from "../git-hub-card/git-hub-card.component";
import { APP_PROVIDERS } from '../app.providers';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GitHubService } from '../services/git-hub.service';
import { GitHubServiceMock } from '../../mock-services/git-hub.service.mock';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent ,SearchUserComponent,GitHubCardComponent],
      imports:[FormsModule,MATERIAL_COMPONENTS,HttpClientModule,BrowserAnimationsModule],
      providers:[{provide: GitHubService, useClass: GitHubServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add three elements to card array', () => {
    expect(component.gitHubList.length).toEqual(0);
    component.onSearchUser('Minimi98');
    component.onSearchUser('Minimi98');
    component.onSearchUser('Minimi98');
    expect(component.gitHubList.length).toEqual(3);
  });
});
