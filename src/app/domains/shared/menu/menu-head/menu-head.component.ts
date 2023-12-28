import { Component, Input, SimpleChange, signal } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Product } from '../../models/product.model';
@Component({
  selector: 'app-menu-head',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './menu-head.component.html',
  styleUrl: './menu-head.component.css'
})
export class MenuHeadComponent {
  hideSideMenu = signal(true);
  @Input({required:true}) cart: Product[]=[];
  total = signal(0);

  toogleSindeMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }

  ngOnChanges(changes: SimpleChange){
    const cart = changes;
    if (cart) {
      this.total.set(this.calcTotal());
    }
  }

  calcTotal(){
    return this.cart.reduce((total, product) => total + product.price, 0 )
  }
}
