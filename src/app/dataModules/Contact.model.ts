import { AddressModel } from './Address.model';


export class ContactModel{
  constructor(public name : string,
              public address : AddressModel){}
}

