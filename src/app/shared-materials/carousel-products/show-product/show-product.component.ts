import { ProductModel } from './../../../dataModules/Product.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  @Input() product : ProductModel;

  constructor() { }

  ngOnInit() {
  }


}
