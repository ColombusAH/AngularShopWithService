import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditProductPageComponent } from './create-edit-product-page.component';

describe('CreateEditProductPageComponent', () => {
  let component: CreateEditProductPageComponent;
  let fixture: ComponentFixture<CreateEditProductPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEditProductPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
