import { ShoppingCartService } from './../../../shared-services/shopping-cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from 'src/app/dataModules/Product.model';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  @Input() product : ProductModel;

  constructor(public shoppingCartService : ShoppingCartService) { }

  ngOnInit() {
  }

  addToShoppingCart(){
    this.shoppingCartService.addProduct(this.product);
  }

}
