import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdModalProductFormComponent } from './ngbd-modal-product-form.component';

describe('NgbdModalProductFormComponent', () => {
  let component: NgbdModalProductFormComponent;
  let fixture: ComponentFixture<NgbdModalProductFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgbdModalProductFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdModalProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
