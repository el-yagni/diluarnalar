import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcumb',
  standalone: true,
  imports: [],
  templateUrl: './breadcumb.component.html',
  styleUrl: './breadcumb.component.scss'
})
export class BreadcumbComponent {
  constructor(private route: Router) {

  }

  apps() {
    document.querySelector(".apps")?.classList.add("active");
    document.querySelector(".game")?.classList.remove("active");
    this.route.navigate(['/product'])
  }
  
  game() {
    document.querySelector(".apps")?.classList.remove("active");
    document.querySelector(".game")?.classList.add("active");
    this.route.navigate(['/product/game'])
  }
}
