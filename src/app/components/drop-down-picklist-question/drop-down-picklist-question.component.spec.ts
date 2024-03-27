import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DropDownPicklistQuestionComponent } from './drop-down-picklist-question.component';

describe('DropDownPicklistQuestionComponent', () => {
  let component: DropDownPicklistQuestionComponent;
  let fixture: ComponentFixture<DropDownPicklistQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDownPicklistQuestionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DropDownPicklistQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
