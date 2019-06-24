import { ClickAble } from './click-able.model';
import { Params } from '@angular/router';


export class CategoryModel {




  // TODO complete this class
  constructor(public name : string | null,
              public id : number,
              public child? : CategoryModel,){}
}


