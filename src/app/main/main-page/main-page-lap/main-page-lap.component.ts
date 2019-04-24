import { PromoModel } from './../../../dataModules/Promo.model';
import { MainPageDataServerModel } from './../../../dataModules/MainPageData.model';
import { MainPageDataServerService } from './../../../dataModules/MainPageDataServer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page-lap',
  templateUrl: './main-page-lap.component.html',
  styleUrls: ['./main-page-lap.component.css']
})
export class MainPageLapComponent implements OnInit {

  data : MainPageDataServerModel;
  constructor(public data_serever : MainPageDataServerService) { }



  ngOnInit() {
    this.data_serever.getMainPageContent().subscribe(
      result => {
        this.data = result;
        console.log(this.data.side_promo1.landing_page);
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
