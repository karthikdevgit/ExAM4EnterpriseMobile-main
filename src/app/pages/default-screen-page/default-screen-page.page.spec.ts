import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DefaultScreenPagePage } from './default-screen-page.page';

describe('DefaultScreenPagePage', () => {
  let component: DefaultScreenPagePage;
  let fixture: ComponentFixture<DefaultScreenPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultScreenPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultScreenPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
