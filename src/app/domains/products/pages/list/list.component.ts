import { Component } from '@angular/core';
import {ProductComponent } from '../../../products/components/product/product.component'
import { MenuHeadComponent } from './../../../shared/menu/menu-head/menu-head.component'
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    ProductComponent,
    MenuHeadComponent,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

}
