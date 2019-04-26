import { SizeService, SizeState } from './../../../../shared-services/size-compat.service';
import { Component, Input, OnInit } from '@angular/core';
import { PromoModel } from 'src/app/dataModules/Promo.model';

@Component({
  selector: 'app-promos-with-timer',
  templateUrl: './promos-with-timer.component.html',
  styleUrls: ['./promos-with-timer.component.css']
})
export class PromosWithTimer implements OnInit{

  cnt = 0;

  size : SizeState;

  @Input() promos : PromoModel[];

  constructor(public sizeService : SizeService){}


  ngOnInit(){

    this.size = this.sizeService.stateSnapshot;
    this.sizeService.stateBuffer.subscribe(
      res => {
        this.size = res;
        console.log(res);
      }
    );
  }

}
