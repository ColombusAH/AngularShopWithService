import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListProductAdderRemoverComponent } from './shopping-list-product-adder-remover.component';

describe('ShoppingListProductAdderRemoverComponent', () => {
  let component: ShoppingListProductAdderRemoverComponent;
  let fixture: ComponentFixture<ShoppingListProductAdderRemoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListProductAdderRemoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListProductAdderRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
