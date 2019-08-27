import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductIconComponent } from './edit-product-icon.component';

describe('EditProductIconComponent', () => {
  let component: EditProductIconComponent;
  let fixture: ComponentFixture<EditProductIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
