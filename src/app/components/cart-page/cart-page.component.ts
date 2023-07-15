import { Component } from '@angular/core';
import { cart } from 'src/app/classes/cart';
import { Cartitem } from 'src/app/classes/cartitem';

import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart!:cart;
  constructor(private cartservice:CartService,private foodservice:FoodService){
    let foods=foodservice.getAll();
    this.setcart();
   }

  setcart(){
    this.cart= this.cartservice.getcart();
  }

  removefromcart(cartitem:Cartitem){
    this.cartservice.removefromcart(cartitem.food.id);
    this.setcart();
  }

  changequantity(cartitem:Cartitem, quantityinstring:string){
    const quantity = parseInt(quantityinstring);
  this.cartservice.changequantity(cartitem.food.id,quantity);
  this.setcart();
  }

  checkout(){
    alert("!! Order Placed !!")
  }

}
