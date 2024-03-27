import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllRelatedRecordRenderPage } from './all-related-record-render.page';

describe('AllRelatedRecordRenderPage', () => {
  let component: AllRelatedRecordRenderPage;
  let fixture: ComponentFixture<AllRelatedRecordRenderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRelatedRecordRenderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllRelatedRecordRenderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
