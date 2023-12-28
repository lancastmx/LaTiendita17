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
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  products = signal<Product[]>([]);

   constructor() {
     const iniProducts: Product[] = [
       {
        id: Date.now(),
        title: 'producto 1 ',
        price: 100,
        imagen: 'https://picsum.photos/200/300?r=23',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'producto 2',
        price: 100,
        imagen: 'https://picsum.photos/200/300?r=24',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'producto 3',
        price: 100,
        imagen: 'https://picsum.photos/200/300?r=25',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'producto 4',
        price: 100,
        imagen: 'https://picsum.photos/200/300?r=25',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'producto 5',
        price: 100,
        imagen: 'https://picsum.photos/200/300?r=25',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'producto 6',
        price: 100,
        imagen: 'https://picsum.photos/200/300?r=25',
        creationAt: new Date().toISOString()
      },
    ];
    this.products.set(iniProducts);
   }

   cart = signal<Product[]>([]);

   addToCart(product: Product){
    this.cart.update(prevState => [...prevState, product]);

    console.log(this.cart.length)
   }

}
