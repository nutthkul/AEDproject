import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyAedPage } from './my-aed.page';

describe('MyAedPage', () => {
  let component: MyAedPage;
  let fixture: ComponentFixture<MyAedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyAedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
