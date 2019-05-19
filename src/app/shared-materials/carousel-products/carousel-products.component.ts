import { interval, Subscription } from 'rxjs';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { slider100 } from 'src/app/shared-services/animation-maker.animation';

@Component({
  selector: 'app-carousel-products',
  templateUrl: './carousel-products.component.html',
  styleUrls: ['./carousel-products.component.css'],
  animations : [slider100],
})
export class CarouselProductsComponent implements OnInit, OnDestroy {

  @Input() products : [];
  @Input() nums : number;
  @Input() name_carousel : string;
  @Input() interval_time : number;
  @Input() percent : number;


  sliderContainerPos : number = 0;



  perc = 0;
  slider_auto_bool = true;
  auto_mode = "sr";

  cntFirst = 0;
  state_anime = "_sr_0";;


  subscription_auto_slide_cnt : Subscription;
  subscription_auto_slide_flag : Subscription;
  date_last_clicked : Date;


  constructor() { }

  touched(){
    this.slider_auto_bool = false;
    this.date_last_clicked = new Date();
  }

  canShowRight() : boolean{
    return this.cntFirst < this.products.length - this.nums;
  }
  canShowLeft() : boolean {
    return this.cntFirst > 0 ;
  }
  showRight(){
    if(this.canShowRight()){
      this.cntFirst ++;
      this.moveSlider();
    }
  }
  showLeft(){
    if(this.canShowLeft()){
      this.cntFirst --;
      this.moveSlider();
    }
  }

  moveSlider(){

    // handles the animation
    var sp = this.sliderContainerPos;
    var currentCntFirst = this.cntFirst;
    var target = -1 * (currentCntFirst)*(100/this.nums);
    var dist =  target - sp;
    var step = dist / 50 ;

    var subs = interval(1).subscribe(
      () => {
        if(this.sliderContainerPos == target||(this.sliderContainerPos +  step > target && step >= 0)||(this.sliderContainerPos +  step < target && step < 0)){
          if((this.sliderContainerPos > target && step >= 0)||(this.sliderContainerPos < target && step < 0)) {
            this.sliderContainerPos = target;
          }
          subs.unsubscribe();
        }else{
          this.sliderContainerPos += step;
        }
      }
    );
    // this.state_anime = "_sr_" + (this.cntFirst)*(100/this.nums);
  }

  move(){
    // handles the mode of auto slide
    if(this.auto_mode == "sr"){
      if(this.canShowRight()){
        this.showRight();
      }else{
        if(this.canShowLeft()){
          this.auto_mode = "sl";
          this.move();
          return;
        }
      }
    }else{
      if(this.canShowLeft()){
        this.showLeft();
      }else{
        if(this.canShowRight()){
          this.auto_mode = "sr";
          this.move();
          return;
        }
      }
    }
  }

  ngOnInit() {


    // The following code handles auto slide and also it will turn off the auto slide for 4 seconds after
    // the user has touched() the carousels
    // it also handles how to change the mode of sliding
    this.subscription_auto_slide_cnt = interval(this.interval_time).subscribe(
      () => {
        if(this.slider_auto_bool == false){
          this.perc = 0;
          return;
        }
        this.perc += this.percent;
        if(this.perc > 100){
          this.move();
          this.perc = 0;
        }
      }
    );

    this.subscription_auto_slide_flag = interval(1000).subscribe(
      () => {
        if(this.date_last_clicked != null){
          if(new Date().getTime() - this.date_last_clicked.getTime() >= 4000){
            this.slider_auto_bool = true;
            this.date_last_clicked = null;
          }
        }
      }
    )

  }

  ngOnDestroy(){
    this.subscription_auto_slide_cnt.unsubscribe();
    this.subscription_auto_slide_flag.unsubscribe();
  }
}
