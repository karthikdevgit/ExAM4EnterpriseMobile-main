import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EachRelatedObjButtonRenderComponent } from './each-related-obj-button-render.component';

describe('EachRelatedObjButtonRenderComponent', () => {
  let component: EachRelatedObjButtonRenderComponent;
  let fixture: ComponentFixture<EachRelatedObjButtonRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EachRelatedObjButtonRenderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EachRelatedObjButtonRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
