import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddAed2Page } from './add-aed2.page';

describe('AddAed2Page', () => {
  let component: AddAed2Page;
  let fixture: ComponentFixture<AddAed2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAed2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddAed2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
