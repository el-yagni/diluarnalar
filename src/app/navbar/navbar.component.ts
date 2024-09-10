import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    click() {
      document.getElementById("menu-icon")?.classList.toggle("bx-x")
      document.querySelector("nav")?.classList.toggle("open")
      document.querySelector("nav")?.style.removeProperty("overflow")

    }
}
