import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/service/products.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  products!: Product[];
  product!: Product;
  productDetails!: Product | undefined;

  constructor(
    private prodSrv: ProductsService,
    private route: ActivatedRoute
  ) {}

  getProductById(id: number) {
    this.prodSrv.getProducts().subscribe((products: Product[]) => {
      this.products = products;
      this.productDetails = this.products.find((product: Product) => {
        return product.id == id;
      });
    });
  }

  addToCart(productDetails: Product) {
    this.prodSrv.addToCart(productDetails);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      let idProduct = params['id'];
      this.getProductById(idProduct);
    });
  }
}
