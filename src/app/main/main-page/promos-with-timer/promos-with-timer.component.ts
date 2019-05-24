import { Subscription, interval } from 'rxjs';
import { SizeService, SizeState } from '../../../shared-services/size-compat.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PromoModel } from 'src/app/dataModules/Promo.model';

@Component({
  selector: 'app-promos-with-timer',
  templateUrl: './promos-with-timer.component.html',
  styleUrls: ['./promos-with-timer.component.css']
})
export class PromosWithTimer implements OnInit, OnDestroy{


  cnt = 0;

  size : SizeState;

  @Input() promos : PromoModel[];

  constructor(public sizeService : SizeService){}


  secs : Subscription;
  remaines : boolean = false;
  time_counter : number [];


  dhms(t) : number [] {
    var days, hours, minutes, seconds;
    days = Math.floor(t / 86400);
    t -= days * 86400;
    hours = Math.floor(t / 3600) % 24;
    t -= hours * 3600;
    minutes = Math.floor(t / 60) % 60;
    t -= minutes * 60;
    seconds = t % 60;

    return [
        days ,
        hours ,
        minutes ,
        seconds
    ]
  }

  ngOnInit(){

    this.size = this.sizeService.stateSnapshot;
    this.sizeService.stateBuffer.subscribe(
      res => {
        this.size = res;
      }
    );


    this.secs = interval(100).subscribe(
      () => {
        let s = Math.floor((this.promos[this.cnt].end_date.getTime() - new Date().getTime()) / 1000);
        if (s < 0) {
          this.remaines = false;
        }else{
          this.remaines = true;
        }
        this.time_counter = this.dhms(s);
      }
    );
  }

  ngOnDestroy(){
    this.secs.unsubscribe();
  }

}
