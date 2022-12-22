import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { BasketService } from 'src/app/services/basket.service';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})


export class BasketComponent implements OnInit {
  cartItems: CartItem[]=[];
  constructor(private basketservice: BasketService) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.cartItems = this.basketservice.list();
  }

  removeFromBasket(product:Product){
    this.basketservice.removeFromBasket(product);


  }
}
