import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuccessAedPage } from './success-aed.page';

describe('SuccessAedPage', () => {
  let component: SuccessAedPage;
  let fixture: ComponentFixture<SuccessAedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessAedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessAedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
