import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponent } from './add.component';
import { AddCardComponent  } from "../add-card/add-card.component";
import { MATERIAL_COMPONENTS} from "../app.module";
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComponent, AddCardComponent ],
      imports : [MATERIAL_COMPONENTS,FormsModule,BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
