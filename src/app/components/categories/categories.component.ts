import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/classes/category';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  category:Category[] = [];

  constructor(private foodservice:FoodService){}

  ngOnInit(): void {

    this.category=this.foodservice.getAllcategory();
  }

}
