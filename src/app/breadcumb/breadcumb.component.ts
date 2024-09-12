import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-breadcumb',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './breadcumb.component.html',
  styleUrl: './breadcumb.component.scss'
})
export class BreadcumbComponent {
  constructor(private route: Router) {

  }

  apps() {
    this.route.navigate(['/product'])
  }
  
  game() {
    this.route.navigate(['/product/game'])
  }
}
