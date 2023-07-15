import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';
import { MenuComponent } from './components/menu/menu.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ItemsPageComponent } from './components/items-page/items-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


const routes: Routes = [
  {path:'booking',component:BookingComponent},
  {path:'menu',component:MenuComponent},
  {path:'signup',component:SignupComponent},
  {path:'',component:HomeSectionComponent},
  {path:'home',component:HomeSectionComponent},
  {path:'about',component:AboutSectionComponent},
  {path:'category/:Category',component:MenuComponent},
  {path:'search/:searchTerm',component:MenuComponent},
  {path:'food/:id',component:ItemsPageComponent},
  {path:'cartpage',component:CartPageComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
