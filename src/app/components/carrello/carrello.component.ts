import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {
  cart = this.prodSrv.cart

  constructor(private prodSrv:ProductsService) { }

  ngOnInit(): void {

  }

}
