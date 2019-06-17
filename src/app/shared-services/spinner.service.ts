import { Subject } from 'rxjs';
import { Injectable } from "@angular/core";


@Injectable()
export class SpinnerService{

  checkState(){
    var res : boolean;
    res = this.keys.length != 0;
    this.in_use_snapp_shot = res;
    this.in_use_buffer.next(res);
  }


  in_use_snapp_shot = false;
  in_use_buffer  = new Subject<boolean>();


  private keys : string[] = [];
  // TODO check for the overflow of num
  private num : number = 0;

  constructor(){}



  remove(key : string){
    var ind = this.keys.indexOf(key);
    if(ind != -1){
      this.keys.splice(ind, 1);
    }
    this.checkState();
  }

  getUniqueKey(){
    var res = "TOK_" + this.num;
    this.num ++;
    return res;
  }

  add(key : string) {
    if(this.keys.indexOf(key) == -1){
      this.keys.push(key);
      this.checkState();
    }
  }


}
















