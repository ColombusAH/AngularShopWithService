import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewProductPageComponent } from './add-new-product-page.component';

describe('AddNewProductPageComponent', () => {
  let component: AddNewProductPageComponent;
  let fixture: ComponentFixture<AddNewProductPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewProductPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
