import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotSpotImageQuestionComponent } from './hot-spot-image-question.component';

describe('HotSpotImageQuestionComponent', () => {
  let component: HotSpotImageQuestionComponent;
  let fixture: ComponentFixture<HotSpotImageQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotSpotImageQuestionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotSpotImageQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
