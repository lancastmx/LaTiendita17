import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule} from '@angular/common'
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

 @Input({required: true}) product!: Product;

 @Output() addToCart = new EventEmitter();
 addToCartHarndler() {
  console.log('click form child');
  this.addToCart.emit('Hola, estes es un mensaje desde el hijo ' + this.product.title);
 }
}
