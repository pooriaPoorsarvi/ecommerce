import { PromoModel } from 'src/app/dataModules/Promo.model';
import { MainPageDataServerService } from './../../../dataModules/MainPageDataServer.service';
import { MainPageDataServerModel } from './../../../dataModules/MainPageData.model';
import { Component, OnInit } from '@angular/core';



@Component({
  selector : "app-main-page-small",
  templateUrl : "main-page-small.component.html",
  styleUrls : ["main-page-small.component.css"]
})
export class MainPageSmallComponent implements OnInit{


  data : MainPageDataServerModel ;


  constructor(public mainPageDataServerService : MainPageDataServerService){}

  ngOnInit(){


    this.mainPageDataServerService.getMainPageContent().subscribe(
      (result) => {
        this.data = result;
      }
    );




  }

  getImagesPromo(field : string) : PromoModel[]{
    var res = [];
    if (this.data[field] == null || this.data[field] == undefined){
      return res;
    }
    var proms = this.data[field] as PromoModel[];
    return proms;
  }




}



