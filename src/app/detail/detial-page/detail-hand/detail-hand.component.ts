import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from 'src/app/dataModules/Product.model';

@Component({
  selector: 'app-detail-hand',
  templateUrl: './detail-hand.component.html',
  styleUrls: ['./detail-hand.component.css']
})
export class DetailHandComponent implements OnInit {

  @Input() product : ProductModel;

  constructor() { }

  ngOnInit() {
  }

}
