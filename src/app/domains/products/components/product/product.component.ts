import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  img = 'https://picsum.photos/200/300?=r' + Math.random()
 @Input() imgpadre: string = '';
 @Input() price: number = 0;
 @Input() title: string = '';
}
