  import { async, ComponentFixture, TestBed } from '@angular/core/testing';
  import {MATERIAL_COMPONENTS} from "../app.module";
  import { HttpClientModule } from '@angular/common/http';
  import { AboutComponent } from './about.component'; 
  import { APP_PROVIDERS} from "../app.providers";
  import { BrowserAnimationsModule} from "@Angular/platform-browser/animations";

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ],
                    imports: 
                    [MATERIAL_COMPONENTS,HttpClientModule,BrowserAnimationsModule],
                    providers: [APP_PROVIDERS],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
