import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TreeViewNotEnabledComponent } from './tree-view-not-enabled.component';

describe('TreeViewNotEnabledComponent', () => {
  let component: TreeViewNotEnabledComponent;
  let fixture: ComponentFixture<TreeViewNotEnabledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeViewNotEnabledComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TreeViewNotEnabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
