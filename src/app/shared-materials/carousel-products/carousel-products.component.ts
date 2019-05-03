import { Component, OnInit, Input } from '@angular/core';
import { slider100 } from 'src/app/shared-services/animation-maker.animation';

@Component({
  selector: 'app-carousel-products',
  templateUrl: './carousel-products.component.html',
  styleUrls: ['./carousel-products.component.css'],
  animations : [slider100],
})
export class CarouselProductsComponent implements OnInit {

  @Input() products : [];
  @Input() nums : number;
  @Input() name_carousel : string;

  cntFirst = 0;
  state_anime = "_sr_0";;

  constructor() { }

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
    this.state_anime = "_sr_" + (this.cntFirst)*(100/this.nums);
  }

  ngOnInit() {
  }

}
