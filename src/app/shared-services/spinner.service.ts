import { Subject } from 'rxjs';
import { Injectable } from "@angular/core";


@Injectable()
export class SpinnerService{

  in_use_snapp_shot = false;
  in_use_buffer  = new Subject<boolean>();

  constructor(){}

  changeValue(value : boolean){
    this.in_use_snapp_shot = value;
    this.in_use_buffer.next(value);
  }


}
















