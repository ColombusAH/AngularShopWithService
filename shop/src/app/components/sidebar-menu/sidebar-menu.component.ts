import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent {
  @Input() isOpen: boolean;
  @Input() linksNames: string[];
  @Output() onCloseMenuBar = new EventEmitter();
  @Output() pageNavigaterEvent = new EventEmitter<string>();
  @Input() cartSize: number = 0;

  closeMenuBar() {
    this.onCloseMenuBar.emit();
  }
  onLinkClicked(linkName) {
    this.pageNavigaterEvent.emit(linkName);
    this.onCloseMenuBar.emit();
  }
}
