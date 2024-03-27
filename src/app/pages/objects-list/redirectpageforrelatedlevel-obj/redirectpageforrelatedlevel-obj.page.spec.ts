import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RedirectpageforrelatedlevelObjPage } from './redirectpageforrelatedlevel-obj.page';

describe('RedirectpageforrelatedlevelObjPage', () => {
  let component: RedirectpageforrelatedlevelObjPage;
  let fixture: ComponentFixture<RedirectpageforrelatedlevelObjPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectpageforrelatedlevelObjPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RedirectpageforrelatedlevelObjPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
