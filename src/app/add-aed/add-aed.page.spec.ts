import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddAedPage } from './add-aed.page';

describe('AddAedPage', () => {
  let component: AddAedPage;
  let fixture: ComponentFixture<AddAedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddAedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
