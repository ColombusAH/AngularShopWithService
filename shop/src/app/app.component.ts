import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';
  menubarMode: boolean = false;
  toggleMenuBar() {
    this.menubarMode = !this.menubarMode;
  }
}
