import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule} from '@angular/common'

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

 @Output() addToCart = new EventEmitter();
 addToCartHarndler() {
  console.log('click form child');
  this.addToCart.emit('Hola, estes es un mensaje desde el hijo');
 }
}
