import { SpinnerService } from 'src/app/shared-services/spinner.service';
import { SizeStateBootstrap, BootstrapSizeService } from './../../shared-services/bootstrap-size.service';
import { ProductModel } from 'src/app/dataModules/Product.model';
import { PromosWithTimer } from './promos-with-timer/promos-with-timer.component';
import { MainPageDataServerModel } from './../../dataModules/MainPageData.model';
import { MainPageDataServerService } from './../../dataModules/MainPageDataServer.service';
import { SizeService, SizeState } from './../../shared-services/size-compat.service';
import { Component, OnInit } from '@angular/core';
import { PromoModel } from 'src/app/dataModules/Promo.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {



  size : SizeState ;
  sb : SizeStateBootstrap;
  data : MainPageDataServerModel;

  constructor(public sizeService : SizeService,
              public data_serever : MainPageDataServerService,
              public bootstrapSizeService : BootstrapSizeService,
              public spinnerService : SpinnerService){}





  ngOnInit() {
    this.size  = this.sizeService.stateSnapshot;
    this.sizeService.stateBuffer.subscribe(
      (event : SizeState) => {
        this.size = event ; console.log(this.size);
      }
    )

    this.sb = this.bootstrapSizeService.stateSnapshot;
    console.log((this.sb.large || this.sb.xl));
    this.bootstrapSizeService.stateBuffer.subscribe(
      (new_sb) =>{
        this.sb = new_sb;
        console.log("hey", this.sb);
        console.log((this.sb.large || this.sb.xl));
      }
    );



    this.data = this.data_serever.getMainPageContent();
    var key : string;
    var before = this.data.ready_snap;
    if(!this.data.ready_snap){
      key = this.spinnerService.getUniqueKey();
      this.spinnerService.add(key);
    }
    this.data.ready_buffer.subscribe(
      (now : boolean) => {
        if(before != now){
          before = now;
          if(now){
            this.spinnerService.remove(key);
          }else{
            this.spinnerService.add(key);
          }
        }
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

  productsFromPromosWithTimer() : ProductModel[]{
    var res : ProductModel[] = [];
    for(var i = 0 ; i < this.data.promo_with_time.length ; i ++){
      res.push(this.data.promo_with_time[i].product);
    }
    return res;
  }

}






