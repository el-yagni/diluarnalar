import { Component } from '@angular/core';
import { BreadcumbComponent } from "../breadcumb/breadcumb.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [BreadcumbComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

}
