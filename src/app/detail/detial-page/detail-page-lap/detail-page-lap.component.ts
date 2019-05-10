import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from 'src/app/dataModules/Product.model';

@Component({
  selector: 'app-detail-page-lap',
  templateUrl: './detail-page-lap.component.html',
  styleUrls: ['./detail-page-lap.component.css']
})
export class DetailPageLapComponent implements OnInit {

  @Input() product : ProductModel;




  constructor() { }

  ngOnInit() {
  }

}
