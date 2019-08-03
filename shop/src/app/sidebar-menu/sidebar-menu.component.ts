import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {
  @Input() isOpen: boolean;
  @Output() onCloseMenuBar = new EventEmitter();
  constructor() {}
  closeMenuBar() {
    this.onCloseMenuBar.emit();
  }
  ngOnInit() {}
}
