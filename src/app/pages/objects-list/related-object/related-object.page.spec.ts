import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RelatedObjectPage } from './related-object.page';

describe('RelatedObjectPage', () => {
  let component: RelatedObjectPage;
  let fixture: ComponentFixture<RelatedObjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedObjectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RelatedObjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
