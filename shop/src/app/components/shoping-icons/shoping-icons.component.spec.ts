import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingIconsComponent } from './shoping-icons.component';

describe('ShopingIconsComponent', () => {
  let component: ShopingIconsComponent;
  let fixture: ComponentFixture<ShopingIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
