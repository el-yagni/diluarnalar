
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
    nav: any
    click() {
      document.getElementById("menu-icon")?.classList.toggle("bx-x")
      document.querySelector("nav")?.classList.toggle("open")
      document.querySelector("nav")?.style.removeProperty("overflow")
      
    }


    fullscreen() {
      document.body.requestFullscreen();
    }


    
    
    constructor(private route: Router ) {
     
    }
    
    init() : void {
      
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
      document.querySelector(".home")?.classList.add("active");
      document.querySelector(".about")?.classList.remove("active");
      document.querySelector(".product")?.classList.remove("active");
      this.route.navigate(["/"]);
    }
    
    product() {
      this.loading()
      document.querySelector(".home")?.classList.remove("active");
      document.querySelector(".about")?.classList.remove("active");
      document.querySelector(".product")?.classList.add("active");
      this.route.navigate(["/product"]);
    }
    about() {
      this.loading()
      document.querySelector(".home")?.classList.remove("active");
      document.querySelector(".about")?.classList.add("active");
      document.querySelector(".product")?.classList.remove("active");
      this.route.navigate(["/about"]);
    }
}
