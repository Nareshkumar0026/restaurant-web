import { Injectable } from '@angular/core';
import { food } from '../classes/food';
import { Category } from '../classes/category';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

   //FIND THE FOOD BY THE ID
  getfoodbyId(id:number):food{
    return this.getAll().find(food => food.id == id)!;
  }

    //GETTING  ALL THE CATEGORIES FOR FILTERING
  getAllcategory():Category[]{
    return[
      {title:'All',number:38},
      {title:'Indian',number:11},
      {title:'French',number:6},
      {title:'Mexican',number:6},
      {title:'Italian',number:7},
      {title:'Drinks',number:8}

    ];
  }

  //SEARCHING THE FOOD AND RETURNING BY THE INPUT GIVEN IN THE SEARCH BAR
  getAllfoodsbysearchterm(searchTerm:string):food[]{
    return this.getAll().filter(food => food.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }
   //SEARHING THE CATEGORY AND RETURNING
  getAllfoodsbycategory(Category:string):food[]{
    return Category == "All" ? this.getAll() : this.getAll().filter(food => food.Category?.includes(Category));
  }
    //MENU LIST
  getAll():food[]{
    return[{id:0, title:'Chapati',  price:100,  imgurl:'/assets/images/menus/menuchap1.jpeg',Category:'Indian'},
    {id:1, title:'Dosai',  price:100,  imgurl:'/assets/images/menus/menudosa1.jpeg',Category:'Indian'},
    {id:2, title:'Veg Biryani',  price: 120,  imgurl:'/assets/images/menus/menuvegbri1.jpeg',Category:'Indian'},
    {id:3, title:'Butter Chicken',  price: 80,  imgurl:'/assets/images/menus/menubutchick1.jpeg',Category:'Indian'},
    {id:4, title:'Chicken Biryani',  price: 160,  imgurl:'/assets/images/menus/menuchickbir1.jpeg',Category:'Indian'},
    {id:5, title:'Tandoori Chicken',  price:100,  imgurl:'/assets/images/menus/menutandchick1.jpeg',Category:'Indian'},
    {id:6, title:'Chicken 65',  price: 75,  imgurl:'/assets/images/menus/menuchick65-1.jpeg',Category:'Indian'},
    {id:7, title:'Idli Sambar',  price: 50,  imgurl:'/assets/images/menus/menuidli1.jpeg',Category:'Indian'},
    {id:8, title:'Mutton Biryani',  price: 180,  imgurl:'/assets/images/menus/menumutbir1.jpeg',Category:'Indian'},
    {id:9, title:'Prawn Curry',  price:100,  imgurl:'/assets/images/menus/menuprawn1.jpeg',Category:'Indian'},
    {id:10, title:'Fish Curry',  price:130,  imgurl:'/assets/images/menus/menufishcur1.jpeg',Category:'Indian'},
    //French Category
    {id:11, title:'Crepes',  price:130,  imgurl:'/assets/images/menus/menufrenchcrepe.jpeg',Category:'French'},
    {id:12, title:'soupe a l`Oignon',  price:130,  imgurl:'/assets/images/menus/menufrenchsoupe.jpeg',Category:'French'},
    {id:13, title:'Croissant',  price:130,  imgurl:'/assets/images/menus/menufrench1.jpg',Category:'French'},
    {id:14, title:'Ratatouille',  price:130,  imgurl:'/assets/images/menus/menufrenchrata.jpeg',Category:'French'},
    {id:15, title:'Pain au Chocolat',  price:130,  imgurl:'/assets/images/menus/menufrenchpain.jpeg',Category:'French'},
    {id:16, title:'Boulettes de Poisson',  price:130,  imgurl:'/assets/images/menus/menufrenchpoisson.jpeg',Category:'French'},
    //Italian Category
  
    {id:17, title:'Pizza Margherita',  price:130,  imgurl:'/assets/images/menus/menuitalianpizzamar.jpeg',Category:'Italian'},
    {id:18, title:'Spaghetti Bolognese',  price:130,  imgurl:'/assets/images/menus/menuitalaianbolo.jpeg',Category:'Italian'},
    {id:19, title:'Lasagna',  price:130,  imgurl:'/assets/images/menus/menuitalaianlasg.jpeg',Category:'Italian'},
    {id:20, title:'Bruchetta',  price:130,  imgurl:'/assets/images/menus/menuitalianbru.jpeg',Category:'Italian'},
     {id:21, title:'Carbonara',  price:130,  imgurl:'/assets/images/menus/menuitalycarbonara.jpeg',Category:'Italian'},
     {id:22, title:'Pesto Pasta',  price:130,  imgurl:'/assets/images/menus/menuitalypesto.jpeg',Category:'Italian'},
     {id:23, title:'Zuppa di Pesce',  price:130,  imgurl:'/assets/images/menus/menuitalyzup.jpeg',Category:'Italian'},
     //Mexican Category
  
  
  
     {id:24, title:'Margarita',  price:130,  imgurl:'/assets/images/menus/menumexmar.jpeg',Category:'Mexican'},
     {id:25, title:'Nachos',  price:130,  imgurl:'/assets/images/menus/menumexnachos.jpeg',Category:'Mexican'},
     {id:26, title:'Burritos',  price:130,  imgurl:'/assets/images/menus/menumexbur.jpeg',Category:'Mexican'},
     {id:27, title:'Guacamole',  price:130,  imgurl:'/assets/images/menus/menumexgua.jpeg',Category:'Mexican'},
     {id:28, title:'Tacos al pastor',  price:130,  imgurl:'/assets/images/menus/menumexican1.jpeg',Category:'Mexican'},
     {id:29, title:'Salsa Verde',  price:130,  imgurl:'/assets/images/menus/menumexsalsa.jpeg',Category:'Mexican'},
     
     //Soft drinks
  
     {id:30, title:'Lemonade',  price:130,  imgurl:'/assets/images/menus/menudrink2.jpeg',Category:'Drinks'},
     {id:31, title:'Mango Lassi',  price:130,  imgurl:'/assets/images/menus/menumangolassi.jpeg',Category:'Drinks'},
     {id:32, title:'Slushie',  price:130,  imgurl:'/assets/images/menus/menuslushiedrink.jpeg',Category:'Drinks'},
     {id:33, title:'Watermelon Juice',  price:130,  imgurl:'/assets/images/menus/menuwaterdrink.jpeg',Category:'Drinks'},
     {id:34, title:'Passion Fruit Mojito',  price:130,  imgurl:'/assets/images/menus/menumojoitodrink.jpeg',Category:'Drinks'},
     {id:35, title:'Pineapple Slushie',  price:130,  imgurl:'/assets/images/menus/menupineslushie.jpeg',Category:'Drinks'},
     {id:36, title:'Fruit Smoothie',  price:130,  imgurl:'/assets/images/menus/menufrslushie.jpeg',Category:'Drinks'},
     {id:37, title:'Frappuccino',  price:130,  imgurl:'/assets/images/menus/menufrappa.jpeg',Category:'Drinks'},

    ]

  }
}
