import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent } from '../../../products/components/product/product.component'
import { MenuHeadComponent } from './../../../shared/menu/menu-head/menu-head.component'
import { Product } from '../../../shared/models/product.model'
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    ProductComponent,
    MenuHeadComponent,
    CommonModule,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);

  constructor() {
    const iniProducts: Product[] = [
      {
        id: Date.now(),
        title: 'producto 1',
        price: 100,
        imagen: 'https://picsum.photos/200/300',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'producto 1',
        price: 100,
        imagen: 'https://picsum.photos/200/300',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'producto 1',
        price: 100,
        imagen: 'https://picsum.photos/200/300',
        creationAt: new Date().toISOString()
      },
    ];
    this.products.set(iniProducts);
  }


}
