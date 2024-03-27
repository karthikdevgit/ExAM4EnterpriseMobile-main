import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModelpagePage } from './modelpage.page';

describe('ModelpagePage', () => {
  let component: ModelpagePage;
  let fixture: ComponentFixture<ModelpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModelpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
