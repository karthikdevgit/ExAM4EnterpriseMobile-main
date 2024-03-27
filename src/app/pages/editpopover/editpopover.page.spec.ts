import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditpopoverPage } from './editpopover.page';

describe('EditpopoverPage', () => {
  let component: EditpopoverPage;
  let fixture: ComponentFixture<EditpopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpopoverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditpopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
