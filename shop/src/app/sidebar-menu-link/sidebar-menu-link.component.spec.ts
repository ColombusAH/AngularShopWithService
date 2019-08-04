import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMenuLinkComponent } from './sidebar-menu-link.component';

describe('SidebarMenuLinkComponent', () => {
  let component: SidebarMenuLinkComponent;
  let fixture: ComponentFixture<SidebarMenuLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarMenuLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarMenuLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
