import { MainPageDataServerModel } from './../../../../dataModules/MainPageData.model';
import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector : "app-product-line-main-lap",
  templateUrl : "product-line-main-lap.component.html",
  styleUrls : ["product-line-main-lap.component.css"],
})
export class ProductLineMainLapComponent implements OnInit{
  @Input() data : MainPageDataServerModel;

  ngOnInit(){
  }

}



