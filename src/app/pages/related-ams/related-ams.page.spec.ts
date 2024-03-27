import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RelatedAmsPage } from './related-ams.page';

describe('RelatedAmsPage', () => {
  let component: RelatedAmsPage;
  let fixture: ComponentFixture<RelatedAmsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedAmsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RelatedAmsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
