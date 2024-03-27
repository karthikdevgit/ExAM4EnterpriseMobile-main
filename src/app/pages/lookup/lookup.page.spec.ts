import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LookupPage } from './lookup.page';

describe('LookupPage', () => {
  let component: LookupPage;
  let fixture: ComponentFixture<LookupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LookupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
