import { RoutingService } from './../../shared-services/routing.service';
import { BootstrapSizeService } from './../../shared-services/bootstrap-size.service';
import { ProductModel } from './../../dataModules/Product.model';
import { interval, Subscription } from 'rxjs';
import { Component, OnInit, Input, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
// import { slider100 } from 'src/app/shared-services/animation-maker.animation';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';
import { SizeStateBootstrap } from 'src/app/shared-services/bootstrap-size.service';

@Component({
  selector: 'app-carousel-products',
  templateUrl: './carousel-products.component.html',
  styleUrls: ['./carousel-products.component.css'],
  // animations : [slider100],
})
export class CarouselProductsComponent implements OnInit, OnDestroy, AfterViewInit {


  hoverCardRight = 0.1;
  hoverCardLeft = 0.1;
  hoversProducts : boolean[] = [];


  sb : SizeStateBootstrap ;

  constructor(public bootstrapSizeService: BootstrapSizeService,
              public routingService : RoutingService) { }



  @ViewChild(PerfectScrollbarComponent) componentRef?: PerfectScrollbarComponent;
  @ViewChild("container") container : ElementRef;
  @ViewChild("ar") arrow_right : ElementRef;
  @ViewChild("al") arrow_left : ElementRef;
  @ViewChild("scroller_container") scroller_container : ElementRef;




  @Input() products : ProductModel[];
  @Input() nums : number;
  @Input() name_carousel : string;
  @Input() interval_time : number;
  @Input() percent : number;
  @Input() maxH_pic : string;
  @Input() progress_bar : boolean;

  endx : number;
  oneIndWidth : number;







  perc = 0;
  slider_auto_bool = true;
  auto_mode = "sr";



  subscription_auto_slide_cnt : Subscription;
  subscription_auto_slide_flag : Subscription;
  date_last_clicked : Date;



  touched(){
    this.slider_auto_bool = false;
    this.date_last_clicked = new Date();
  }

  canShowRight() : boolean{
    return this.componentRef.directiveRef.position(true).x as number != this.endx;
  }
  canShowLeft() : boolean {
    return this.componentRef.directiveRef.position(true).x as number != 0 ;
  }
  showRight(){
    var xC  = this.componentRef.directiveRef.position(true).x as number;
    this.componentRef.directiveRef.scrollToX(xC + this.oneIndWidth, 500);
  }
  showLeft(){
    var xC  = this.componentRef.directiveRef.position(true).x as number;
    this.componentRef.directiveRef.scrollToX(xC - this.oneIndWidth, 500);
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


    for(var i = 0 ; i < this.products.length ; i ++){
      this.hoversProducts.push(false);
    }

    this.sb = this.bootstrapSizeService.stateSnapshot;
    this.bootstrapSizeService.stateBuffer.subscribe(
      (sbn) => {
        this.sb = sbn;
      }
    );

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




  ngAfterViewInit(){
    this.componentRef.directiveRef.scrollToRight();
    this.endx = this.componentRef.directiveRef.position(true).x as number;
    this.oneIndWidth = this.endx / this.products.length;
    this.componentRef.directiveRef.scrollToLeft(0, 2000);
  }

  ngOnDestroy(){
    this.subscription_auto_slide_cnt.unsubscribe();
    this.subscription_auto_slide_flag.unsubscribe();
  }






  reach_end(){
    this.touched();
    this.arrow_right.nativeElement.style.opacity = 0.5;
  }

  out_of_end(){
    this.touched();
    this.arrow_right.nativeElement.style.opacity = 1;
  }

  reach_start(){
    this.touched();
    this.arrow_left.nativeElement.style.opacity = 0.5;
  }

  out_of_start(){
    this.touched();
    this.arrow_left.nativeElement.style.opacity = 1;
  }


  log(anyt){
    console.log(anyt)
  }
}
