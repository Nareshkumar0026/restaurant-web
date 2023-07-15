import { Component, OnInit } from '@angular/core';
import{ActivatedRoute}from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { food } from 'src/app/classes/food';
import { CartService } from 'src/app/services/cart.service';
import { Cartitem } from 'src/app/classes/cartitem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  foods:food[]=[];


 

  constructor(private route:ActivatedRoute,private foodservice:FoodService,private cartservice:CartService){

  }
  ngOnInit():void{
    this.foods =this.foodservice.getAll();
    this.route.params.subscribe(params =>{
      if(params['searchTerm'])
      this.foods = this.foodservice.getAllfoodsbysearchterm(params['searchTerm']);
      else if(params['Category'])
      this.foods= this.foodservice.getAllfoodsbycategory(params['Category']);
      else
      this.foods =this.foodservice.getAll();
    
    })
  }

  addtocart(){
    this.addtocart();

  }
}
