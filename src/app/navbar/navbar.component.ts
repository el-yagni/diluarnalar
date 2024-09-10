
import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    
    constructor(private route: Router) {
      
    }
    
    loading() {
      document.querySelector(".loaders")?.classList.add("display")
      
      setTimeout(() => {
      document.getElementById("menu-icon")?.classList.remove("bx-x")
        document.querySelector("nav")?.classList.remove("open")
        document.querySelector(".loaders")?.classList.remove("display")
      }, 1000)

    }
    
    
    home() {
      this.loading()
      this.route.navigate(["/"]);
    }
    
    product() {
      this.loading()
      this.route.navigate(["/product"]);
    }
    about() {
      this.loading()
      this.route.navigate(["/about"]);
    }
}
