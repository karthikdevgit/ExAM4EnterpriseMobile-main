import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HorizontalPicklistQuestionComponent } from './horizontal-picklist-question.component';

describe('HorizontalPicklistQuestionComponent', () => {
  let component: HorizontalPicklistQuestionComponent;
  let fixture: ComponentFixture<HorizontalPicklistQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalPicklistQuestionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HorizontalPicklistQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
