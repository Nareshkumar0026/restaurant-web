import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { food } from 'src/app/classes/food';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.css']
})
export class ItemsPageComponent implements OnInit{

  food!:food;

  constructor(private activatedroute:ActivatedRoute,private foodservice:FoodService,
    private cartservice:CartService, private router:Router){
    activatedroute.params.subscribe(params =>{
      if(params['id'])
      this.food = foodservice.getfoodbyId(params['id']);
    })
  }

  ngOnInit(): void {
    
  }

  addtocart(){
    this.cartservice.addtocart(this.food);
    this.router.navigateByUrl('/cartpage');
  }
}
