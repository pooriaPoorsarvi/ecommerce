import { ProductModel } from 'src/app/dataModules/Product.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-hand-card',
  templateUrl: './detail-hand-card.component.html',
  styleUrls: ['./detail-hand-card.component.css']
})
export class DetailHandCardComponent implements OnInit {

  @Input() product : ProductModel;

  constructor() { }

  ngOnInit() {
  }

}
