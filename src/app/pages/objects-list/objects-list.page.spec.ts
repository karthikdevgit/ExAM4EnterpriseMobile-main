import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObjectsListPage } from './objects-list.page';
import 'hammerjs';


describe('ObjectsListPage', () => {
  let component: ObjectsListPage;
  let fixture: ComponentFixture<ObjectsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObjectsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
