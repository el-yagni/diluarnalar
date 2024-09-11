import { Component } from '@angular/core';
import { BreadcumbComponent } from "../breadcumb/breadcumb.component";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [BreadcumbComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

}
