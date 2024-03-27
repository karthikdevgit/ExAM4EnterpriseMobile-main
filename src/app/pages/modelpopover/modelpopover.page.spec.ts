import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModelpopoverPage } from './modelpopover.page';

describe('ModelpopoverPage', () => {
  let component: ModelpopoverPage;
  let fixture: ComponentFixture<ModelpopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelpopoverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModelpopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
