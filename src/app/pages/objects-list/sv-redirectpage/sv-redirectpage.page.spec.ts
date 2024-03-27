import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SvRedirectpagePage } from './sv-redirectpage.page';

describe('SvRedirectpagePage', () => {
  let component: SvRedirectpagePage;
  let fixture: ComponentFixture<SvRedirectpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvRedirectpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SvRedirectpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
