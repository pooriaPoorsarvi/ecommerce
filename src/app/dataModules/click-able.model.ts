import { Params } from '@angular/router';
// TODO right now we have to check for everything to see if we need to save functions or not ... check if we could skip the setter part for functions
export interface ClickAble{
  get_url() : string;
  get_params() : Params;
}

