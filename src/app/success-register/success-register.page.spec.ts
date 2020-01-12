import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuccessRegisterPage } from './success-register.page';

describe('SuccessRegisterPage', () => {
  let component: SuccessRegisterPage;
  let fixture: ComponentFixture<SuccessRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessRegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
