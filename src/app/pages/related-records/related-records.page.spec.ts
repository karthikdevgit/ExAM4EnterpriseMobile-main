import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RelatedRecordsPage } from './related-records.page';

describe('RelatedRecordsPage', () => {
  let component: RelatedRecordsPage;
  let fixture: ComponentFixture<RelatedRecordsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedRecordsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RelatedRecordsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
