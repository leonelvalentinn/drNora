import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  collapsed = false;
  onMenu() {
    this.collapsed = !this.collapsed;
  }
}
