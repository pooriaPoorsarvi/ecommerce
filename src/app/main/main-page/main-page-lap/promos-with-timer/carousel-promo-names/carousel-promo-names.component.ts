import { interval } from 'rxjs';
import { PromoModel } from 'src/app/dataModules/Promo.model';
import { Component, Input, Output,  EventEmitter } from '@angular/core';
import {slider100} from "../../../../../shared-services/animation-maker.animation"

@Component({
 selector : 'app-carousel-promo-names',
 templateUrl : "carousel-promo-names.component.html",
 styleUrls : ['carousel-promo-names.component.css'],
 animations : [slider100]
})
export class CarouselPromoNames{
  cnt = 0;
  state_anime = "_sr_0";
  containerInd = 0;

  sliderContainerPos : number = 0;


  @Input() promos : PromoModel[];
  @Output() num_selected = new EventEmitter<number>() ;

  nums_per_slide = 4 ;


  computeTransform (ind : number){
    return 'translateX(' + (ind)*100 + '%)';
  }
  changeSelected(ind : number){
    this.cnt = ind;
    this.num_selected.emit(ind);
    // console.log(this.cnt-1, 0);
    var sel = Math.max(this.cnt-1, 1);
    var sp = this.sliderContainerPos;
    var currentCntFirst = sel-1;
    var target = -1 * (currentCntFirst)*(100/this.nums_per_slide);
    var dist =  target - sp;
    var step = dist / 50 ;

    var subs = interval(1).subscribe(
      () => {
        if(this.sliderContainerPos == target ||(this.sliderContainerPos +  step > target && step >= 0)||(this.sliderContainerPos +  step < target && step < 0)){
          if((this.sliderContainerPos > target && step >= 0)||(this.sliderContainerPos < target && step < 0)) {
            this.sliderContainerPos = target;
          }
          subs.unsubscribe();
        }else{
          this.sliderContainerPos += step;
        }
      }
    );
    // this.state_anime = "_sr_" + (sel-1)*(100/this.nums_per_slide);
  }






  computeTranslationOfContainer(){
    return 'translateX(' + (-1*this.containerInd)*(100/this.nums_per_slide) + '%)';
  }

}


