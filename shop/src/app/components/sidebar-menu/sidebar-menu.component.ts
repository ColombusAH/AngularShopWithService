import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent {
  @Input() isOpen: boolean;
  @Input() linksNames: string[];
  @Input() cartSize: number = 0;
  @Input() userLoggedIn: boolean = false;
  @Input() userHavePermission: boolean = false;
  @Output() logoutClickedEvent = new EventEmitter();
  @Output() onCloseMenuBar = new EventEmitter();
  @Output() pageNavigaterEvent = new EventEmitter<string>();

  closeMenuBar() {
    this.onCloseMenuBar.emit();
  }
  onLinkClicked(linkName) {
    this.pageNavigaterEvent.emit(linkName);
    this.onCloseMenuBar.emit();
  }

  logoutClicked() {
    this.logoutClickedEvent.emit();
    this.pageNavigaterEvent.emit('Home');
  }
}
