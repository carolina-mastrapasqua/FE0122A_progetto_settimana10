import { HttpClientModule } from '@angular/common/http';
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes = [
  { path: '', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path:'cart', component: CarrelloComponent }
];

@NgModule({
  declarations: [AppComponent, ProductsComponent, ProductDetailsComponent, CarrelloComponent, NavbarComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
