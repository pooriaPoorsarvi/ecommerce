import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from 'src/app/dataModules/Product.model';

@Component({
  selector: 'app-product-main-card',
  templateUrl: './product-main-card.component.html',
  styleUrls: ['./product-main-card.component.css']
})
export class ProductMainCardComponent implements OnInit {

  @Input() product : ProductModel;

  constructor() { }

  ngOnInit() {
  }

}
