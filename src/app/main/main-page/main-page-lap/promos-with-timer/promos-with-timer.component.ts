import { Component, Input } from '@angular/core';
import { PromoModel } from 'src/app/dataModules/Promo.model';

@Component({
  selector: 'app-promos-with-timer',
  templateUrl: './promos-with-timer.component.html',
  styleUrls: ['./promos-with-timer.component.css']
})
export class PromosWithTimer{

  cnt = 0;

  @Input() promos : PromoModel[];

}
