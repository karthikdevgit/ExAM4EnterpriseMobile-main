import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EachAMDetailRenderComponent } from './each-amdetail-render.component';

describe('EachAMDetailRenderComponent', () => {
  let component: EachAMDetailRenderComponent;
  let fixture: ComponentFixture<EachAMDetailRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EachAMDetailRenderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EachAMDetailRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
