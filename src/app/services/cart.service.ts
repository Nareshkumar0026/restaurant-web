import { Injectable } from '@angular/core';
import { cart } from '../classes/cart';
import { food } from '../classes/food';
import { Cartitem } from '../classes/cartitem';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:cart=new cart();

  constructor() {
   }
     //ADDING THE ITEMS TO THE CART 
  addtocart(food:food):void{
  
   let cartitem = this.cart.items.find(item => item.food.id === food.id);
    if(cartitem){
      this.changequantity(food.id,cartitem.quantity + 1);
      return;
    }
    this.cart.items.push(new Cartitem(food));
  }

  //REMOVING THE ITEMS FROM THE CART
  removefromcart(foodid:number):void{
    this.cart.items=this.cart.items.filter(item =>item.food.id != foodid);
  }
   
  //CHANGING THE VALUE WHILE ADDING AND REMOVING THE ITEMS
  changequantity(foodid:number,quantity:number){
    let cartitem= this.cart.items.find(item => item.food.id === foodid);
    if(!cartitem)return;
    cartitem.quantity=quantity;
  }

  getcart():cart{
    return this.cart;
  }
}
