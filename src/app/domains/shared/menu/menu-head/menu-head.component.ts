import { Component, Input, signal } from '@angular/core';
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
  @Input({required:true}) cart: Product[ ]=[];

  toogleSindeMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }

}
