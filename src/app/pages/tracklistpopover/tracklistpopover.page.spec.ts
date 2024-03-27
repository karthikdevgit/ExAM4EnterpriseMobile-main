import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TracklistpopoverPage } from './tracklistpopover.page';

describe('TracklistpopoverPage', () => {
  let component: TracklistpopoverPage;
  let fixture: ComponentFixture<TracklistpopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracklistpopoverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TracklistpopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
