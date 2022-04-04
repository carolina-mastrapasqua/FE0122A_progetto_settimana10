import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseUrl = 'http://localhost:4201';
  products: Product[] = [];
  cart: Product[] = [];
  count: number = 0;

  constructor(private http: HttpClient) {}

  addToCart(product: Product){
    this.cart.push(product);
    this.count = this.count++;
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + '/products');
  }

}
