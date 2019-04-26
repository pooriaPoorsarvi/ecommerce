import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PromoModel } from 'src/app/dataModules/Promo.model';
import { Observable, interval, Subscription } from 'rxjs';



@Component({
  selector : "app-promo-with-timer-detail",
  templateUrl : "promo-with-timer-detail.component.html",
  styleUrls : ["promo-with-timer-detail.component.css"]
})
export class PromoWithTimerDetail implements OnInit, OnDestroy{

  @Input() promo : PromoModel;

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
    this.secs = interval(100).subscribe(
      () => {
        let s = Math.floor((this.promo.end_date.getTime() - new Date().getTime()) / 1000);
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



