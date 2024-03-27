import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SyncSettingPage } from './sync-setting.page';

describe('SyncSettingPage', () => {
  let component: SyncSettingPage;
  let fixture: ComponentFixture<SyncSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyncSettingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SyncSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
