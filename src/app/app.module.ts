import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule,ReactiveFormsModule}from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { BookingComponent } from './components/booking/booking.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ItemsPageComponent } from './components/items-page/items-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { ErrorSearchComponent } from './components/error-search/error-search.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterBarComponent,
    BookingComponent,
    MenuComponent,
    HomeSectionComponent,
    SignupComponent,
    AboutSectionComponent,
    SearchBarComponent,
    CategoriesComponent,
    ItemsPageComponent,
    CartPageComponent,
    ErrorSearchComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
