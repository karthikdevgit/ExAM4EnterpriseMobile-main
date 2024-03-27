import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EachAMButtonRenderComponent } from './each-ambutton-render.component';

describe('EachAMButtonRenderComponent', () => {
  let component: EachAMButtonRenderComponent;
  let fixture: ComponentFixture<EachAMButtonRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EachAMButtonRenderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EachAMButtonRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
