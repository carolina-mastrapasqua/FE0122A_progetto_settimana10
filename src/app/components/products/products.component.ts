import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private prodSrv: ProductsService) {}

  products: Product[] = [];

  getProducts() {
    this.prodSrv.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
