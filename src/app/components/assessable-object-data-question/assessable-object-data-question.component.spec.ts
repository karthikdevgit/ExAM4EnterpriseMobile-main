import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssessableObjectDataQuestionComponent } from './assessable-object-data-question.component';

describe('AssessableObjectDataQuestionComponent', () => {
  let component: AssessableObjectDataQuestionComponent;
  let fixture: ComponentFixture<AssessableObjectDataQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessableObjectDataQuestionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssessableObjectDataQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
