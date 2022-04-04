import { ProductsService } from 'src/app/service/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  count = this.prodSrv.cart;

  constructor(private prodSrv:ProductsService) { }

  ngOnInit(): void {

  }

}
