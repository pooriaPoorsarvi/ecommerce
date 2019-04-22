import { Component, OnInit, Input } from '@angular/core';
import { PromoModel } from 'src/app/dataModules/Promo.model';

@Component({
  selector: 'app-carousel-promo',
  templateUrl: './carousel-promo.component.html',
  styleUrls: ['./carousel-promo.component.css']
})
export class CarouselPromoComponent implements OnInit {

  @Input() promos : PromoModel [] ;
  logics : {r2m : boolean, m2r  : boolean, l2m  : boolean, m2l : boolean}[] = [];
  cnt  = 0;

  goRight(){
    if(this.cnt > 0){

      this.logics[this.cnt] = {r2m : false, m2r  : false, l2m  : false, m2l : false};
      this.logics[this.cnt-1] = {r2m : false, m2r  : false, l2m  : false, m2l : false};
      this.logics[this.cnt].m2r = true;
      this.logics[this.cnt-1].l2m = true;

      this.cnt -- ;
    }else{
      return;
    }
  }
  goLeft(){
    if(this.cnt < this.promos.length - 1){


      this.logics[this.cnt] = {r2m : false, m2r  : false, l2m  : false, m2l : false};
      this.logics[this.cnt+1] = {r2m : false, m2r  : false, l2m  : false, m2l : false};
      this.logics[this.cnt].m2l = true;
      this.logics[this.cnt+1].r2m = true;

      this.cnt ++ ;
    }else{
      return;
    }
  }


  constructor() { }

  ngOnInit() {
    for(let i = 0 ; i < this.promos.length ; i ++){
      this.logics.push({r2m : false, m2r  : false, l2m  : false, m2l : false});
    }
  }




}
